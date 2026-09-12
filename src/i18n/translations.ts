export type Language = "en" | "ru";

export interface TranslationSchema {
  nav: {
    clusterOnline: string;
    modules: string;
    architecture: string;
    telemetry: string;
    githubOrg: string;
    profile: string;
    deployCluster: string;
    commandCopied: string;
    toggleTheme: string;
    toggleLanguage: string;
    themeDark: string;
    themeLight: string;
  };
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    headlineGradient: string;
    subheadline: string;
    description: string;
    exploreBtn: string;
    cliCommand: string;
    copied: string;
    nodesCount: string;
    meshUptime: string;
    consensusLatency: string;
  };
  modules: {
    eyebrow: string;
    title: string;
    description: string;
    inspectSource: string;
    items: {
      mcpRouter: {
        category: string;
        badge: string;
        description: string;
        terminalHeader: string;
        terminalMetric: string;
        payload: string;
      };
      agentVault: {
        category: string;
        badge: string;
        description: string;
        terminalHeader: string;
        terminalMetric: string;
        payload: string;
      };
      googleJules: {
        category: string;
        badge: string;
        description: string;
        terminalHeader: string;
        terminalMetric: string;
        payload: string;
      };
      antigravityTelegramAgent: {
        category: string;
        badge: string;
        description: string;
        terminalHeader: string;
        terminalMetric: string;
        payload: string;
      };
    };
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: {
      routing: string;
      security: string;
      swarms: string;
    };
    cards: {
      routing: Array<{ title: string; description: string; metric: string }>;
      security: Array<{ title: string; description: string; metric: string }>;
      swarms: Array<{ title: string; description: string; metric: string }>;
    };
  };
  footer: {
    copyright: string;
    github: string;
    architecture: string;
    mcpRouter: string;
    agentVault: string;
  };
}

export type Translations = TranslationSchema;

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      clusterOnline: "v1.4.2 Cluster Online",
      modules: "Modules",
      architecture: "Architecture",
      telemetry: "Telemetry",
      githubOrg: "GitHub Org",
      profile: "Profile",
      deployCluster: "Deploy Cluster",
      commandCopied: "Command Copied!",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Switch language",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
    },
    hero: {
      eyebrow: "Autonomous Multi-Agent Mesh Protocol",
      headlinePrefix: "TheNovaNodes —",
      headlineGradient: "Modular AI Agent Infrastructure",
      subheadline: "Unified Routing, Secret Vaults, Consensus Engines",
      description:
        "Engineered for zero-trust microsecond agent orchestration. Execute multi-tenant Model Context Protocol pipelines, decentralized ZK credential rotation, and distributed verifiable agent consensus at planetary scale.",
      exploreBtn: "Explore Core Repos",
      cliCommand: "npx @novanodes/cluster init",
      copied: "COPIED",
      nodesCount: "14,280 ACTIVE NODES",
      meshUptime: "99.99% MESH UPTIME",
      consensusLatency: "<11.8ms P99 CONSENSUS",
    },
    modules: {
      eyebrow: "Modular Matrix",
      title: "Core Infrastructure Repositories",
      description:
        "Adopt modules independently or integrate into a unified mesh network.",
      inspectSource: "Inspect Source",
      items: {
        mcpRouter: {
          category: "DYNAMIC PROTOCOL GATEWAY",
          badge: "v2.1 ONLINE",
          description:
            "Handles multiplexed Model Context Protocol streams, cross-agent RPC peer tunneling, and distributed semantic payload routing with guaranteed sub-5ms latency envelopes.",
          terminalHeader: "ROUTE_TOPOLOGY :: MCP_MESH",
          terminalMetric: "3.4ms latency",
          payload: '> payload: { "intent": "codegen", "consensus_quorum": 3 }',
        },
        agentVault: {
          category: "ZERO-KNOWLEDGE CREDENTIAL ENCLAVE",
          badge: "agent-vault:kms",
          description:
            "Hardware-backed enclave security for autonomous workers. Orchestrates ephemeral token rotation, threshold signatures, and localized cryptographic delegation without exposing master keys.",
          terminalHeader: "ENCLAVE_STATE :: AES-256-GCM",
          terminalMetric: "KMS Locked",
          payload:
            "> zkp_proof: verified with 0-leakage enclave boundary [TTL: 42s]",
        },
        googleJules: {
          category: "AUTONOMOUS CONSENSUS & JULES MESH",
          badge: "jules-swarm:active",
          description:
            "Coordinates decentralized multi-model swarm work units, raft-based decision quorums, and native Google Jules developer workspace automation bridges.",
          terminalHeader: "CONSENSUS_ENGINE :: RAFT_QUORUM",
          terminalMetric: "9/9 Nodes Synced",
          payload: "> delegation: jules_workspace_task: #9941 dispatched",
        },
        antigravityTelegramAgent: {
          category: "AUTONOMOUS GO SWARM ENGINE & TELEGRAM PTY",
          badge: "swarm-engine:go",
          description:
            "High-performance, deadlock-immune Pure Go multi-agent swarm engine for Antigravity Telegram Bots. Features 1200ms streaming throttler, Inactivity Turn Watchdog, Buffer Salvage, and 429 Cold Safe Parking.",
          terminalHeader: "SWARM_ENGINE :: GO_RUNTIME",
          terminalMetric: "0% Deadlock / 1200ms PTY",
          payload: "> 200 OK /antigravity/stream (PTY throttled: 1200ms, watchdog: arm)",
        },
      },
    },
    architecture: {
      eyebrow: "Decoupled Topology",
      title: "Zero-Trust Agent Mesh Architecture",
      description:
        "TheNovaNodes separates the orchestrator, credential enclaves, and tool gateways into independent micro-runtimes communicating over high-speed MCP streams.",
      tabs: {
        routing: "01. Multiplexed Routing",
        security: "02. Enclave Security",
        swarms: "03. Autonomous Swarms",
      },
      cards: {
        routing: [
          {
            title: "Unified MCP Gateway",
            description:
              "Single HTTP/SSE multiplexer on port 8090 routes agent calls to underlying daemons without port collision or process leaks.",
            metric: "✓ Sub-5ms stream latency",
          },
          {
            title: "Granular ACL Matrix",
            description:
              "Strict agent filtering ensures only authorized bots can access sensitive tools like DNS renewal, mailbox writes, or code deployment.",
            metric: "✓ Zero-trust caller authentication",
          },
          {
            title: "Hot-Reload Multiplexing",
            description:
              "Add, update, or decommission MCP servers on the fly without restarting active agent conversation sessions.",
            metric: "✓ 99.99% uptime availability",
          },
        ],
        security: [
          {
            title: "Ephemeral Bearer Tokens",
            description:
              "Access keys rotate automatically with strict time-to-live envelopes, preventing token leakage even during malicious code inspection.",
            metric: "✓ Enclave memory isolation",
          },
          {
            title: "Zero-Trace Auditing",
            description:
              "Every tool execution logs an immutable audit event into encrypted WAL SQLite, allowing forensic tracking of agent actions.",
            metric: "✓ Cryptographic event proofs",
          },
          {
            title: "Deadlock Protection",
            description:
              "Mandatory kernel-level SIGKILL timeouts on network operations eliminate hung subprocesses and resource exhaustion.",
            metric: "✓ Hardened SIGKILL guards",
          },
        ],
        swarms: [
          {
            title: "Google Jules Delegation",
            description:
              "Offload heavy cloud refactoring and test-driven development to asynchronous Google Jules cloud workers via native MCP tools.",
            metric: "✓ Multi-hour async tasks",
          },
          {
            title: "Raft Consensus Gates",
            description:
              "Critical infrastructure changes require multi-agent quorum confirmation before commits or deployments are dispatched.",
            metric: "✓ Multi-model validation",
          },
          {
            title: "Red Team Self-Audits",
            description:
              "Autonomous quarantine and code verification loops run before PRs reach the ZaVLab approval gate.",
            metric: "✓ Pre-push lint & race checks",
          },
        ],
      },
    },
    footer: {
      copyright:
        "TheNovaNodes Foundation. High-Throughput Autonomous AI Agent Mesh Architecture.",
      github: "GitHub",
      architecture: "Architecture",
      mcpRouter: "mcp-router",
      agentVault: "agent-vault",
    },
  },
  ru: {
    nav: {
      clusterOnline: "v1.4.2 Кластер Онлайн",
      modules: "Модули",
      architecture: "Архитектура",
      telemetry: "Телеметрия",
      githubOrg: "Организация GitHub",
      profile: "Профиль",
      deployCluster: "Развернуть Кластер",
      commandCopied: "Команда скопирована!",
      toggleTheme: "Сменить тему",
      toggleLanguage: "Сменить язык",
      themeDark: "Тёмная тема",
      themeLight: "Светлая тема",
    },
    hero: {
      eyebrow: "Автономный Мультиагентный Mesh-Протокол",
      headlinePrefix: "TheNovaNodes —",
      headlineGradient: "Модульная Архитектура AI-Агентов",
      subheadline: "Единая маршрутизация, хранилища секретов, консенсус-движки",
      description:
        "Спроектировано для микросекундной оркестрации агентов по стандарту Zero-Trust. Многопользовательские MCP-пайплайны, децентрализованная ZK-ротация ключей доступа и распределенный проверяемый консенсус в планетарном масштабе.",
      exploreBtn: "Исследовать Репозитории",
      cliCommand: "npx @novanodes/cluster init",
      copied: "СКОПИРОВАНО",
      nodesCount: "14 280 АКТИВНЫХ НОД",
      meshUptime: "99.99% АПТАЙМ СЕТИ",
      consensusLatency: "<11.8мс P99 КОНСЕНСУС",
    },
    modules: {
      eyebrow: "Модульная Матрица",
      title: "Ключевые Репозитории Инфраструктуры",
      description:
        "Используйте модули независимо или объединяйте их в единую ячеистую сеть.",
      inspectSource: "Исходный код",
      items: {
        mcpRouter: {
          category: "ДИНАМИЧЕСКИЙ ПРОТОКОЛЬНЫЙ ШЛЮЗ",
          badge: "v2.1 ОНЛАЙН",
          description:
            "Мультиплексирование потоков Model Context Protocol, межсетевые RPC-туннели агентов и распределенная маршрутизация семантических нагрузок с задержкой до 5мс.",
          terminalHeader: "ТОПОЛОГИЯ_МАРШРУТА :: MCP_MESH",
          terminalMetric: "3.4мс задержка",
          payload: '> payload: { "intent": "codegen", "consensus_quorum": 3 }',
        },
        agentVault: {
          category: "ZERO-KNOWLEDGE АНКЛАВ СЕКРЕТОВ",
          badge: "agent-vault:kms",
          description:
            "Аппаратно изолированный анклав безопасности для автономных воркеров. Ротация эфемерных токенов, пороговые подписи и криптографическая делегация без раскрытия мастер-ключей.",
          terminalHeader: "СОСТОЯНИЕ_АНКЛАВА :: AES-256-GCM",
          terminalMetric: "KMS Заблокирован",
          payload:
            "> zkp_proof: подтвержден без утечек за границу анклава [TTL: 42s]",
        },
        googleJules: {
          category: "АВТОНОМНЫЙ КОНСЕНСУС И СЕТЬ JULES",
          badge: "jules-swarm:active",
          description:
            "Координация децентрализованных роев мультимоделей, кворумы решений на базе Raft и нативные мосты автоматизации рабочих пространств Google Jules.",
          terminalHeader: "ДВИЖОК_КОНСЕНСУСА :: RAFT_КВОРУМ",
          terminalMetric: "9/9 Нод синхронизировано",
          payload: "> delegation: задача_воркспейса_jules: #9941 отправлена",
        },
        antigravityTelegramAgent: {
          category: "АВТОНОМНЫЙ GO SWARM-ДВИЖОК И PTY TELEGRAM",
          badge: "swarm-engine:go",
          description:
            "Высокопроизводительный, защищённый от дедлоков Pure Go мультиагентный движок для Telegram-ботов Antigravity. Оснащён 1200мс стриминг-троттлером, сторожевым таймером неактивности и буферным спасением сообщений.",
          terminalHeader: "SWARM_ENGINE :: РАНТАЙМ_GO",
          terminalMetric: "0% Дедлоков / 1200мс PTY",
          payload: "> 200 OK /antigravity/stream (PTY троттлинг: 1200мс, watchdog: active)",
        },
      },
    },
    architecture: {
      eyebrow: "Модульная Топология",
      title: "Zero-Trust Архитектура Агентной Сети",
      description:
        "TheNovaNodes разделяет оркестратор, защищенные анклавы секретов и шлюзы инструментов на независимые микро-рантаймы, взаимодействующие по скоростным MCP-потокам.",
      tabs: {
        routing: "01. Мультиплексная Маршрутизация",
        security: "02. Безопасность Анклава",
        swarms: "03. Автономные Рои",
      },
      cards: {
        routing: [
          {
            title: "Единый MCP-Шлюз",
            description:
              "Единый HTTP/SSE мультиплексор на порту 8090 направляет вызовы агентов к нижележащим демонам без конфликта портов и утечек процессов.",
            metric: "✓ Задержка потока < 5мс",
          },
          {
            title: "Гранулярная ACL Матрица",
            description:
              "Строгая фильтрация агентов гарантирует доступ к привилегированным тулам (DNS, почта, деплой) только авторизованным ботам.",
            metric: "✓ Zero-trust аутентификация вызовов",
          },
          {
            title: "Hot-Reload Мультиплексирование",
            description:
              "Добавление, обновление и вывод из эксплуатации MCP-серверов на лету без перезапуска активных диалогов агентов.",
            metric: "✓ 99.99% доступность кластера",
          },
        ],
        security: [
          {
            title: "Эфемерные Bearer-Токены",
            description:
              "Ключи доступа ротируются автоматически со строгими TTL-окнами, исключая утечку токенов даже при инспекции скомпрометированного кода.",
            metric: "✓ Изоляция памяти анклава",
          },
          {
            title: "Нестираемый Аудит",
            description:
              "Каждое выполнение инструмента фиксирует неизменяемое событие в шифрованном WAL SQLite для криптографического аудита.",
            metric: "✓ Криптографические доказательства событий",
          },
          {
            title: "Защита от Deadlock",
            description:
              "Обязательные таймауты на уровне ядра с принудительным SIGKILL исключают зависшие подпроцессы и исчерпание ресурсов.",
            metric: "✓ Жесткая SIGKILL-защита ядра",
          },
        ],
        swarms: [
          {
            title: "Делегирование в Google Jules",
            description:
              "Перенос тяжелого рефакторинга и разработки через тесты на асинхронных облачных воркеров Google Jules через нативный MCP.",
            metric: "✓ Многочасовые асинхронные задачи",
          },
          {
            title: "Гейты Raft-Консенсуса",
            description:
              "Критические изменения инфраструктуры требуют подтверждения кворума мультиагентов перед коммитом или деплоем.",
            metric: "✓ Мультимодельная валидация",
          },
          {
            title: "Red Team Самоаудит",
            description:
              "Автономные циклы карантина и проверки чистоты кода выполняются до передачи пулл-реквеста на утверждение ЗавЛабу.",
            metric: "✓ Проверка линтера и race-детектор",
          },
        ],
      },
    },
    footer: {
      copyright:
        "TheNovaNodes Foundation. Высоконагруженная архитектура ячеистой сети автономных AI-агентов.",
      github: "GitHub",
      architecture: "Архитектура",
      mcpRouter: "mcp-router",
      agentVault: "agent-vault",
    },
  },
};
