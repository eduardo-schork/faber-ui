import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'baseline-widely-available',
    sourcemap: true,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        styles: fileURLToPath(new URL('./src/theme-variables/styles.css', import.meta.url)),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'styles',
    },
    rolldownOptions: {
      external: [
        '@faber-ui/tokens',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
      ],
    },
  },
});
