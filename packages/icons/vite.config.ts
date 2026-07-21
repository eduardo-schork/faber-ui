import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
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
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
