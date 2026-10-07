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
            namespace: 'faber-ui-react',
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
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        avatar: fileURLToPath(new URL('./src/components/avatar/index.ts', import.meta.url)),
        accordion: fileURLToPath(new URL('./src/components/accordion/index.ts', import.meta.url)),
        autocomplete: fileURLToPath(
          new URL('./src/components/autocomplete/index.ts', import.meta.url),
        ),
        breadcrumb: fileURLToPath(new URL('./src/components/breadcrumb/index.ts', import.meta.url)),
        dialog: fileURLToPath(new URL('./src/components/dialog/index.ts', import.meta.url)),
        drawer: fileURLToPath(new URL('./src/components/drawer/index.ts', import.meta.url)),
        menu: fileURLToPath(new URL('./src/components/menu/index.ts', import.meta.url)),
        pagination: fileURLToPath(new URL('./src/components/pagination/index.ts', import.meta.url)),
        popover: fileURLToPath(new URL('./src/components/popover/index.ts', import.meta.url)),
        progress: fileURLToPath(new URL('./src/components/progress/index.ts', import.meta.url)),
        slider: fileURLToPath(new URL('./src/components/slider/index.ts', import.meta.url)),
        tabs: fileURLToPath(new URL('./src/components/tabs/index.ts', import.meta.url)),
        toast: fileURLToPath(new URL('./src/components/toast/index.ts', import.meta.url)),
        tooltip: fileURLToPath(new URL('./src/components/tooltip/index.ts', import.meta.url)),
        alert: fileURLToPath(new URL('./src/components/alert/index.ts', import.meta.url)),
        'alert-dialog': fileURLToPath(
          new URL('./src/components/alert-dialog/index.ts', import.meta.url),
        ),
        'choice-control': fileURLToPath(
          new URL('./src/components/choice-control/index.ts', import.meta.url),
        ),
        box: fileURLToPath(new URL('./src/components/box/index.ts', import.meta.url)),
        grid: fileURLToPath(new URL('./src/components/grid/index.ts', import.meta.url)),
        list: fileURLToPath(new URL('./src/components/list/index.ts', import.meta.url)),
        'description-list': fileURLToPath(
          new URL('./src/components/description-list/index.ts', import.meta.url),
        ),
        'code-block': fileURLToPath(
          new URL('./src/components/code-block/index.ts', import.meta.url),
        ),
        'skip-link': fileURLToPath(new URL('./src/components/skip-link/index.ts', import.meta.url)),
        'nav-link': fileURLToPath(new URL('./src/components/nav-link/index.ts', import.meta.url)),
        header: fileURLToPath(new URL('./src/components/header/index.ts', import.meta.url)),
        footer: fileURLToPath(new URL('./src/components/footer/index.ts', import.meta.url)),
        'side-nav': fileURLToPath(new URL('./src/components/side-nav/index.ts', import.meta.url)),
        card: fileURLToPath(new URL('./src/components/card/index.ts', import.meta.url)),
        link: fileURLToPath(new URL('./src/components/link/index.ts', import.meta.url)),
        'link-button': fileURLToPath(
          new URL('./src/components/link-button/index.ts', import.meta.url),
        ),
        'segmented-control': fileURLToPath(
          new URL('./src/components/segmented-control/index.ts', import.meta.url),
        ),
        table: fileURLToPath(new URL('./src/components/table/index.ts', import.meta.url)),
        badge: fileURLToPath(new URL('./src/components/badge/index.ts', import.meta.url)),
        button: fileURLToPath(new URL('./src/components/button/index.ts', import.meta.url)),
        checkbox: fileURLToPath(new URL('./src/components/checkbox/index.ts', import.meta.url)),
        'center-flex': fileURLToPath(
          new URL('./src/components/center-flex/index.ts', import.meta.url),
        ),
        container: fileURLToPath(new URL('./src/components/container/index.ts', import.meta.url)),
        divider: fileURLToPath(new URL('./src/components/divider/index.ts', import.meta.url)),
        field: fileURLToPath(new URL('./src/components/field/index.ts', import.meta.url)),
        flex: fileURLToPath(new URL('./src/components/flex/index.ts', import.meta.url)),
        'icon-button': fileURLToPath(
          new URL('./src/components/icon-button/index.ts', import.meta.url),
        ),
        input: fileURLToPath(new URL('./src/components/input/index.ts', import.meta.url)),
        radio: fileURLToPath(new URL('./src/components/radio/index.ts', import.meta.url)),
        'radio-group': fileURLToPath(
          new URL('./src/components/radio-group/index.ts', import.meta.url),
        ),
        select: fileURLToPath(new URL('./src/components/select/index.ts', import.meta.url)),
        skeleton: fileURLToPath(new URL('./src/components/skeleton/index.ts', import.meta.url)),
        spinner: fileURLToPath(new URL('./src/components/spinner/index.ts', import.meta.url)),
        switch: fileURLToPath(new URL('./src/components/switch/index.ts', import.meta.url)),
        textarea: fileURLToPath(new URL('./src/components/textarea/index.ts', import.meta.url)),
        text: fileURLToPath(new URL('./src/components/text/index.ts', import.meta.url)),
        title: fileURLToPath(new URL('./src/components/title/index.ts', import.meta.url)),
        'visually-hidden': fileURLToPath(
          new URL('./src/components/visually-hidden/index.ts', import.meta.url),
        ),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rolldownOptions: {
      // One output file per source module keeps constants apart from client components.
      output: { preserveModules: true, preserveModulesRoot: 'src' },
      external: [
        /^@radix-ui\//,
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
