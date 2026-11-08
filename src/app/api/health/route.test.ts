import { describe, it, expect } from 'vitest';
import { GET } from './route';

describe('/api/health route', () => {
  it('returns status ok and app name', async () => {
    process.env.NEXT_PUBLIC_COMMIT_SHA = 'test-sha-12345';
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe('ok');
    expect(data.app).toBe('thenovanodes-portal');
    expect(data.commit).toBe('test-sha-12345');
    expect(data.timestamp).toBeDefined();
  });
});
