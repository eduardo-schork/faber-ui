import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
            ssr: true,
          },
        ],
      ],
    }),
  ],
  build: {
    target: 'baseline-widely-available',
    sourcemap: true,
    minify: false,
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        button: fileURLToPath(new URL('./src/components/button/index.ts', import.meta.url)),
        'icon-button': fileURLToPath(
          new URL('./src/components/icon-button/index.ts', import.meta.url),
        ),
        text: fileURLToPath(new URL('./src/components/text/index.ts', import.meta.url)),
        title: fileURLToPath(new URL('./src/components/title/index.ts', import.meta.url)),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rolldownOptions: {
      external: [
        '@faber-ui/themes',
        '@faber-ui/tokens',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
      ],
    },
  },
});
