# Faber UI repository context

This file is a short entry point for AI coding agents. It is not a replacement for the component
guides or typed source.

## Read before changing a component

1. Read the matching guide in `apps/storybook/docs/components/` for intended behavior and limits.
2. Read the component's `*.types.ts`, `*.ui.tsx`, `*.styles.ts`, stories, and tests under
   `packages/react/src/components/`. Types and implementation are authoritative for the current
   API; do not assume a guide lists every native prop.
3. Read `apps/storybook/docs/design-tokens.mdx`, `theming.mdx`, or `typography.mdx` when changing a
   cross-component foundation.

## Project conventions

- All code, documentation, examples, and UI copy are written in English.
- Keep project-owned source paths in kebab case. Public React component declarations use `.ui.tsx`.
- Use TypeScript `type` aliases with a `T` prefix and named value exports.
- Use semantic HTML and native props/ref behavior; use tokens for reusable visual decisions.
- styled-components is the component styling layer; CSS variables are the customization boundary.
- Every styled part of a component sets a stable public class through `.attrs`, named
  `faber-ui-<component>-<part>` in kebab case, so consumers can restyle any part from plain CSS.
- Build component parts from existing library components (`styled(HFlex)`, `Text`, `Button`) rather
  than raw elements; use a raw element only when no library component fits.
- A component with several parts exports them next to the finished component (`DialogRoot`,
  `DialogHeader`, …) and is itself assembled from those exports, so consumers can compose their own.
- The website is built from library components. When it needs one the library lacks, add it to
  "Design-system gaps" in `apps/website/README.md` instead of leaving an unrecorded local stand-in.
- Document contract changes in the component guide, stories, and relevant tests in the same change.
- Storybook groups components by family. A story file is titled `Components/<Family>/<Name>`,
  with the family the component has in `apps/website/src/site/component-catalog.ts`, and its guide
  attaches to it with `<Meta of={ComponentStories} />`, so one Docs page holds the example, the
  controls, the guide, and the stories.
- A new component needs, in the same change: its folder under `packages/react/src/components/`, an
  export in `packages/react/src/index.ts`, an `exports` entry in `packages/react/package.json`, an
  entry in `packages/react/vite.config.ts`, a guide in `apps/storybook/docs/components/`, a row in
  `apps/storybook/docs/components.mdx`, an entry in the website catalog with a demo in
  `apps/website/src/components/component-demos/demos/`, and a changeset.
- Real-browser tests live in `apps/storybook/browser-tests/*.browser.ts` and run with
  `bun run test:browser` against the built Storybook. Add or update one when a change affects
  focus, keyboard movement, or the position of an overlay or picker; jsdom cannot check those.
- Both themes must pass `packages/themes/src/theme/theme-contrast.test.ts` (WCAG 2.2 AA) after any
  palette or theme change.
- Do not make commits unless the user explicitly asks.
- Work happens on `develop`. `master` is protected and changes only through a pull request from
  `develop`; merging there deploys the website and starts a release.

`PROJECT.md` and the local `docs/` directory are intentionally gitignored. They may be present in
the developer's workspace, but a repository clone must not rely on them. The versioned guides,
stories, tests, and typed source are the portable context.
