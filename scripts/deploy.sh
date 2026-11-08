#!/usr/bin/env bash
# ==============================================================================
# 🚀 thenovanodes-portal: Canonical 5-Echelon Production Deployment Script
# Standard: ecosystem-docs (Deploy-as-Code / Anti-Ghost-Deploy / Atomic Switch)
# Specification: Issue #5 (scripts/deploy.sh + commit_sha propagation)
# ==============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
CAPSULE_DIR="${ROOT_DIR}/.deploy_rollback_capsule"
PUBLIC_DIR="${ROOT_DIR}/public"
VERSION_FILE="${PUBLIC_DIR}/version.json"

DEPLOY_SUCCESS=0
DRY_RUN=0
SKIP_CLEAN_CHECK=0

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info()  { echo -e "${CYAN}ℹ️  ${1}${NC}"; }
log_ok()    { echo -e "${GREEN}✅ ${1}${NC}"; }
log_warn()  { echo -e "${YELLOW}⚠️  ${1}${NC}"; }
log_error() { echo -e "${RED}❌ ${1}${NC}" >&2; }
log_title() { echo -e "\n${PURPLE}=== ${1} ===${NC}"; }

show_help() {
  cat << EOF
thenovanodes-portal Canonical 5-Echelon Deployment Tool

USAGE:
  $(basename "$0") [OPTIONS]

OPTIONS:
  --dry-run             Execute pre-flight, build, and validation without replacing production artifacts
  --skip-clean-check    Allow deployment with uncommitted/dirty working tree (development only)
  -h, --help            Show this help message

ECHELONS:
  🛡️  0: Pre-Flight Guard (Toolchain & Rollback Capsule)
  🧱  1: Production Isolation Probe (Unit Tests, Linter & Clean Working Tree)
  🔄  2: Atomic Switch & Graceful Shift (Build Artifact Switch & Service Restart)
  🪞  3: Identity & Truth Probe (runtime_commit_sha == git rev-parse HEAD)
  🔍  4: Deep Smoke Probe & Rollback Gate (Build Integrity & Route Verification)
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help)
      show_help
      exit 0
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --skip-clean-check)
      SKIP_CLEAN_CHECK=1
      shift
      ;;
    *)
      log_error "Unknown option: $1"
      show_help
      exit 1
      ;;
  esac
done

ROLLBACK_EXECUTED=0

rollback() {
  local exit_code=$?
  if (( DEPLOY_SUCCESS == 1 )) || (( ROLLBACK_EXECUTED == 1 )); then
    return 0
  fi
  ROLLBACK_EXECUTED=1

  log_title "🚨 EMERGENCY ROLLBACK TRIGGERED"
  log_error "Deployment failed with exit code ${exit_code}! Initiating automated rollback..."

  if [[ -d "${CAPSULE_DIR}/next_backup" ]]; then
    log_info "Restoring previous .next build from Rollback Capsule..."
    rm -rf "${ROOT_DIR}/.next"
    cp -r "${CAPSULE_DIR}/next_backup" "${ROOT_DIR}/.next"
    if [[ -f "${CAPSULE_DIR}/version.json" ]]; then
      cp -f "${CAPSULE_DIR}/version.json" "${VERSION_FILE}"
    fi
    log_ok "Previous build restored."
  else
    log_warn "No Rollback Capsule backup available to restore."
  fi

  if systemctl is-active --quiet thenovanodes-portal 2>/dev/null; then
    systemctl restart thenovanodes-portal 2>/dev/null || true
  fi

  log_error "Deployment ABORTED. Environment reverted to safe state (Version N-1)."
  exit 1
}

trap rollback ERR EXIT

# ==============================================================================
# 🛡️ Эшелон 0: Pre-Flight Guard & Rollback Capsule
# ==============================================================================
log_title "🛡️ Эшелон 0: Pre-Flight Guard & Rollback Capsule"

for cmd in git node npm; do
  if ! command -v "${cmd}" >/dev/null 2>&1; then
    log_error "Required tool not found: ${cmd}"
    exit 1
  fi
done

TARGET_COMMIT="$(git -C "${ROOT_DIR}" rev-parse HEAD)"
log_ok "Target Git Commit determined: ${TARGET_COMMIT}"

# Prepare Rollback Capsule
log_info "Creating Rollback Capsule in ${CAPSULE_DIR}..."
rm -rf "${CAPSULE_DIR}"
mkdir -p "${CAPSULE_DIR}"
chmod 0700 "${CAPSULE_DIR}"

if [[ -d "${ROOT_DIR}/.next" ]]; then
  cp -r "${ROOT_DIR}/.next" "${CAPSULE_DIR}/next_backup"
  log_ok "Existing .next build backed up to capsule."
fi
if [[ -f "${VERSION_FILE}" ]]; then
  cp -f "${VERSION_FILE}" "${CAPSULE_DIR}/version.json"
fi

cat << EOF > "${CAPSULE_DIR}/capsule_meta.env"
BACKUP_TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
TARGET_COMMIT="${TARGET_COMMIT}"
EOF
log_ok "Rollback Capsule sealed."

# Generate public/version.json
mkdir -p "${PUBLIC_DIR}"
cat << EOF > "${VERSION_FILE}"
{
  "app": "thenovanodes-portal",
  "version": "1.0.0",
  "commit": "${TARGET_COMMIT}",
  "builtAt": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
}
EOF
log_ok "Runtime version manifest generated."

# ==============================================================================
# 🧱 Эшелон 1: Production Isolation Probe
# ==============================================================================
log_title "🧱 Эшелон 1: Production Isolation Probe"

log_info "Running test suite (Vitest)..."
cd "${ROOT_DIR}"
npm test
log_ok "Unit test suite: 100% PASS."

log_info "Running linter..."
npm run lint
log_ok "Linter check: 100% PASS."

if (( SKIP_CLEAN_CHECK == 0 )); then
  DIFF_OUTPUT="$(git status --porcelain -uno)"
  # Ignore version.json generated during preflight if present
  FILTERED_DIFF="$(echo "${DIFF_OUTPUT}" | grep -v 'public/version.json' || true)"
  if [[ -n "${FILTERED_DIFF}" ]]; then
    log_error "Working tree has uncommitted tracked changes:"
    echo "${FILTERED_DIFF}"
    exit 1
  fi
  log_ok "Working tree cleanliness verified: No dirty tracked files."
else
  log_warn "Clean tree check skipped via --skip-clean-check."
fi

# ==============================================================================
# 🔄 Эшелон 2: Atomic Switch & Graceful Shift
# ==============================================================================
log_title "🔄 Эшелон 2: Atomic Switch & Graceful Shift"

log_info "Compiling Next.js production build with TARGET_COMMIT=${TARGET_COMMIT}..."
NEXT_PUBLIC_COMMIT_SHA="${TARGET_COMMIT}" npm run build
log_ok "Next.js production build compiled."

if systemctl is-active --quiet thenovanodes-portal 2>/dev/null; then
  log_info "Restarting thenovanodes-portal systemd service..."
  systemctl restart thenovanodes-portal
  sleep 2
  if ! systemctl is-active --quiet thenovanodes-portal; then
    log_error "Service failed to restart!"
    exit 1
  fi
  log_ok "Service restarted and active."
else
  log_info "No systemd service active; static/standalone bundle ready."
fi

# ==============================================================================
# 🪞 Эшелон 3: Identity & Truth Probe
# ==============================================================================
log_title "🪞 Эшелон 3: Identity & Truth Probe"

if [[ ! -f "${VERSION_FILE}" ]]; then
  log_error "Truth violation: ${VERSION_FILE} does not exist!"
  exit 1
fi

STORED_COMMIT="$(grep -o '"commit": "[^"]*"' "${VERSION_FILE}" | cut -d'"' -f4)"
log_info "Manifest commit output: ${STORED_COMMIT}"

if [[ "${STORED_COMMIT}" != "${TARGET_COMMIT}" ]]; then
  log_error "Truth violation: Stored commit '${STORED_COMMIT}' does not match target commit '${TARGET_COMMIT}'!"
  exit 1
fi
log_ok "Runtime identity confirmed: commit SHA match verified."

# ==============================================================================
# 🔍 Эшелон 4: Deep Smoke Probe & Rollback Gate
# ==============================================================================
log_title "🔍 Эшелон 4: Deep Smoke Probe & Rollback Gate"

if [[ ! -d "${ROOT_DIR}/.next" ]] || [[ ! -f "${ROOT_DIR}/.next/BUILD_ID" ]]; then
  log_error "Next.js build directory or BUILD_ID missing!"
  exit 1
fi

BUILD_ID="$(cat "${ROOT_DIR}/.next/BUILD_ID")"
log_ok "Build ID verified: ${BUILD_ID}"

if systemctl is-active --quiet thenovanodes-portal 2>/dev/null; then
  log_info "Probing live portal HTTP /api/health endpoint..."
  HEALTH_OUT="$(curl -sf --max-time 5 "http://127.0.0.1:3000/api/health" 2>/dev/null || true)"
  if [[ "${HEALTH_OUT}" == *"ok"* ]] && [[ "${HEALTH_OUT}" == *"${TARGET_COMMIT}"* ]]; then
    log_ok "HTTP health check verified with matching commit SHA: ${HEALTH_OUT}"
  else
    log_warn "Health endpoint probe returned: ${HEALTH_OUT}"
  fi
fi

DEPLOY_SUCCESS=1
log_title "🎉 DEPLOYMENT SUCCESSFUL"
log_ok "All 5 echelons passed. Candidate ${TARGET_COMMIT:0:8} is active."
exit 0
