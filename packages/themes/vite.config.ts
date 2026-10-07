import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { styledComponentsInterop } from '../../scripts/styled-components-interop-plugin.mjs';
import { useClientDirective } from '../../scripts/use-client-directive-plugin.mjs';

export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
            namespace: 'faber-ui-themes',
            pure: true,
            ssr: true,
          },
        ],
      ],
    }),
    styledComponentsInterop(),
    useClientDirective(),
  ],
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
      // One output file per source module keeps constants apart from client components.
      output: { preserveModules: true, preserveModulesRoot: 'src' },
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
