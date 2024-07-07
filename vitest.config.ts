import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/__tests__/**/*'],
    coverage: {
      provider: 'v8',
      include: ['src/helpers/'],
      reportsDirectory: 'coverage/unit/',
      reporter: 'lcov',
    },
  },
});
