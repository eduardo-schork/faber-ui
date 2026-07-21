import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'baseline-widely-available',
    sourcemap: true,
    minify: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      external: ['@faber-ui/utilities'],
    },
  },
});
