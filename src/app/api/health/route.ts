import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    app: 'thenovanodes-portal',
    commit: process.env.NEXT_PUBLIC_COMMIT_SHA || process.env.GIT_COMMIT_SHA || 'unknown',
    timestamp: new Date().toISOString(),
  });
}
