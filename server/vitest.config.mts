import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      // server.ts only starts the listener, so no test imports it.
      exclude: ['src/server.ts'],
      reporter: ['text', 'html'],
    },
  },
});
