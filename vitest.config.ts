import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const rootDirectory = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@faber-ui/fonts': `${rootDirectory}packages/fonts/src/index.ts`,
      '@faber-ui/icons': `${rootDirectory}packages/icons/src/index.ts`,
      '@faber-ui/react': `${rootDirectory}packages/react/src/index.ts`,
      '@faber-ui/themes': `${rootDirectory}packages/themes/src/index.ts`,
      '@faber-ui/tokens': `${rootDirectory}packages/tokens/src/index.ts`,
    },
  },
  test: {
    environment: 'jsdom',
    globals: false,
    passWithNoTests: true,
    restoreMocks: true,
    setupFiles: [`${rootDirectory}vitest.setup.ts`],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
    },
  },
});
