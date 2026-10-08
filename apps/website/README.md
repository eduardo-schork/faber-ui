# Faber UI Website

This Next.js App Router application is the Faber UI demonstration and documentation site, and a
real integration environment for the design system.

Unlike Storybook's source-oriented development setup, this app resolves `@faber-ui/react` through
its workspace package exports. This helps exercise the same JavaScript, declarations, stylesheets,
and transitive dependencies that an external Next.js consumer receives. The site is built with the
components it documents.

## Development

From the repository root:

```bash
bun run website
```

The app runs at `http://localhost:3000`. Turborepo builds its Faber UI workspace dependencies
before starting the persistent Next.js development server.

## Pages

| Route                 | Content                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                   | Overview: a Button figure measured from the live element, the site-wide material switch, four principles with code, and an index of components by family.                              |
| `/docs`               | Getting started: installation, stylesheet, Next.js and Vite setup, and a validated form.                                                                                               |
| `/docs/components`    | A live example and snippet for every component, with the element it renders and its ref type.                                                                                          |
| `/docs/foundations`   | The main token tables, rendered from the exported objects, with both themes side by side.                                                                                              |
| `/docs/customization` | Every way to change the library on one page: props, themes, CSS variables and fonts, part classes with a live stylesheet editor, tokens, and components assembled from exported parts. |

Each topic lives on one page. The overview links to the guides instead of repeating them, the header
is the only navigation between pages, and the docs sidebar lists the sections of the current page.

Storybook remains the detailed prop and state reference. `SITE_LINKS.STORYBOOK` in
`src/site/site.constants.ts` points at the hosted Storybook when `NEXT_PUBLIC_STORYBOOK_URL` is set
and at the local development server on port 6006 otherwise.

## How the site themes itself

The site uses the CSS-only theme path instead of a root `ThemeProvider`. An inline script in the
root layout copies the stored theme (`light`, `dark`, or `system`) and material to `data-theme`
and `data-material` attributes on the `html` element before first paint. The header control and
the material switch write the same attributes, and `useSitePreferences` reads them back.

Materials are sets of semantic CSS variable overrides defined in `src/site/materials.ts`. The same
data generates the installed rules and the stylesheet shown to the reader. `ThemeProvider` is used
only where a page demonstrates a scoped theme.

## Source layout

```text
src/
  app/          Routes. Pages are server components that export metadata.
  components/   Client components, one folder each (`*.ui.tsx` and `*.styles.ts`).
  hooks/        Theme and material preferences.
  providers/    The styled-components server registry.
  site/         Data: component catalog, materials, links.
```

Generic interface pieces come from the library: links and link buttons render the Next.js `Link`
through the `as` prop, and icons come from `@faber-ui/icons`. Only site-specific pieces, such as
the syntax-highlighted code block and the measured figure, live here.

The component catalog in `src/site/component-catalog.ts` drives the parts list on the overview and
the components page. `src/components/component-demos` must provide a demo for every catalog entry;
the compiler enforces it. Add both when a component is added to `@faber-ui/react`.

## Design-system gaps

The website is built from Faber UI components. When the site needs something the library does not
have, it is listed here to be developed in the library, and the local stand-in is replaced once it
ships.

| Missing in the library       | Where the site stands in for it today  |
| ---------------------------- | -------------------------------------- |
| Selectable card (radio card) | `MaterialButton` in the recast panel   |
| ColorSwatch                  | `Swatch`, `MaterialSwatch`, and `Role` |
| Display font sizes           | `clamp()` sizes on the hero and titles |

The audit of 2026-10-06 found 104 raw styled elements. Box, Grid, List, DescriptionList, CodeBlock,
Header, Footer, NavLink, SideNav, SkipLink, and the lead, caption, and overline text members were
added to the library for it, and the site now has two: the `MaterialButton` above and a native
`fieldset` that the Radio example shows on purpose. Syntax tokens inside code blocks and a few
`strong` and `small` elements stay native because they inherit the text around them.

## Publishing to GitHub Pages

`.github/workflows/pages.yml` builds a static export of this site with Storybook under
`/storybook` and deploys it. It runs on pushes to `master` once Pages is enabled in the repository
settings with the source set to GitHub Actions. The same export can be produced locally:

```bash
FABER_UI_STATIC_EXPORT=true FABER_UI_BASE_PATH=/faber-ui bun run build:website
```

The files land in `apps/website/out`. Without those variables the site builds as a regular Next.js
application.

## Production build

```bash
bun run build:website
```

The app uses the official styled-components server registry pattern. The SWC styled-components
transform is enabled in `next.config.ts` to keep server-rendered styles and client hydration
consistent.
