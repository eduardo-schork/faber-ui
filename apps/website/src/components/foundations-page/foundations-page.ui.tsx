'use client';

import {
  BORDER_WIDTH_SCALE,
  BREAKPOINTS,
  COLOR_SWATCH_ORIENTATIONS,
  ColorSwatch,
  DARK_THEME,
  FOCUS_RINGS,
  FONT_SIZES,
  FONT_SIZE_SCALE,
  FONT_WEIGHT_SCALE,
  Field,
  Input,
  LIGHT_THEME,
  PALETTE,
  RADII,
  RADIUS_SCALE,
  SHADOWS,
  SIZE_SCALE,
  SPACING_SCALE,
  THEME_MODES,
  THEME_VARIABLE_NAMES,
  Text,
  ThemeProvider,
  type TTheme,
  type TThemeTokenName,
} from '@faber-ui/react';
import { ArrowUpRightIcon } from '@faber-ui/icons';
import { useSyncExternalStore } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DocsSection,
  DocsSectionTitle,
  DocsSubsection,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { Caption, ExternalLink, Prose, Run } from '@/components/sheet/sheet.styles';
import { getStorybookDocsUrl } from '@/site/site.constants';

import {
  Bar,
  FocusField,
  FocusSpecimen,
  RoleList,
  Scale,
  ScaleRow,
  ScaleVisual,
  Square,
  SwatchFamily,
  SwatchStrip,
  ThemePanel,
  ThemePanels,
  TypeSpecimen,
} from './foundations-page.styles';

type TTokenEntry = readonly [name: string, value: string];

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'color', label: 'Color' },
  { id: 'typography', label: 'Typography' },
  { id: 'space', label: 'Space and size' },
  { id: 'shape', label: 'Shape' },
  { id: 'layout', label: 'Breakpoints' },
  { id: 'more', label: 'The rest' },
];

const PALETTE_FAMILIES = [
  { name: 'Amethyst', prefix: 'AMETHYST_', role: 'primary' },
  { name: 'Obsidian', prefix: 'OBSIDIAN_', role: 'accent' },
  { name: 'Silver to Graphite', prefix: 'NEUTRAL_', role: 'structure' },
  { name: 'Red', prefix: 'RED_', role: 'error' },
] as const;

const SCHEMES = [
  { mode: THEME_MODES.LIGHT, name: 'LIGHT_THEME', theme: LIGHT_THEME },
  { mode: THEME_MODES.DARK, name: 'DARK_THEME', theme: DARK_THEME },
] as const satisfies readonly { mode: string; name: string; theme: TTheme }[];

const THEME_ROLES = Object.keys(THEME_VARIABLE_NAMES) as TThemeTokenName[];

const toEntries = (tokens: Readonly<Record<string, number | string>>): TTokenEntry[] =>
  Object.entries(tokens).map(([name, value]) => [name, String(value)]);

const PALETTE_ENTRIES = toEntries(PALETTE);
const SPECIMEN_TEXT = 'Plain parts, properly made.';

const ARCHITECTURE_CODE = `// 1. A primitive: a color with a name and no opinion.
PALETTE.AMETHYST_400; // 'hsl(270 50% 38%)'

// 2. A semantic role: what the color is for. This is a CSS variable.
COLORS.PRIMARY; // 'var(--faber-ui-color-primary, hsl(270 50% 38%))'

// 3. Components only ever read roles.
const Card = styled.section\`
  color: \${COLORS.TEXT_PRIMARY};
  background: \${COLORS.SURFACE_PRIMARY};
  border-radius: \${RADII.LG};
  padding: \${SPACINGS.LG};
\`;`;

const ELEVATIONS = [
  { name: 'SM', use: 'Cards and filled buttons' },
  { name: 'MD', use: 'Menus, popovers, and toasts' },
  { name: 'LG', use: 'Dialogs and drawers' },
] as const;

/** A token name with the CSS custom property that overrides it. */
function TokenName({ name, prefix }: { readonly name: string; readonly prefix: string }) {
  return (
    <Run>
      <strong>{name}</strong>
      <small>
        --faber-ui-{prefix}-{name.toLowerCase()}
      </small>
    </Run>
  );
}

const subscribeToViewport = (onChange: () => void) => {
  window.addEventListener('resize', onChange);

  return () => {
    window.removeEventListener('resize', onChange);
  };
};

const readViewportWidth = () => window.innerWidth;
const getServerViewportWidth = () => 0;

export function FoundationsPage() {
  const viewportWidth = useSyncExternalStore(
    subscribeToViewport,
    readViewportWidth,
    getServerViewportWidth,
  );
  const breakpointEntries = toEntries(BREAKPOINTS);
  const currentBreakpoint =
    viewportWidth === 0
      ? undefined
      : breakpointEntries
          .filter(([, value]) => Number.parseFloat(value) <= viewportWidth)
          .at(-1)?.[0];

  return (
    <DocsLayout
      kicker="Foundations"
      title="The token tables."
      lead="Typed token objects hold every visual decision in the library. This page is drawn directly from the ones you reach for most, so what you see is what the package exports."
      sections={SECTIONS}
    >
      <DocsSection id="color" aria-labelledby="color-title">
        <DocsSectionTitle id="color-title">Color</DocsSectionTitle>
        <Prose>
          Color has two layers. <Text.Code>PALETTE</Text.Code> holds primitives: named values with
          no meaning attached. <Text.Code>COLORS</Text.Code> holds semantic roles, each one a CSS
          variable with the default palette value as its fallback. Components read roles only, which
          is what makes the palette replaceable.
        </Prose>
        <CodeBlock code={ARCHITECTURE_CODE} label="primitive → role → component" language="tsx" />

        <DocsSubsection>
          <Caption data-emphasis="ink">PALETTE</Caption>
          {PALETTE_FAMILIES.map(({ name, prefix, role }) => (
            <SwatchFamily key={prefix}>
              <Caption>
                {name} · {role}
              </Caption>
              <SwatchStrip>
                {PALETTE_ENTRIES.filter(([token]) => token.startsWith(prefix)).map(
                  ([token, value]) => (
                    <ColorSwatch
                      key={token}
                      color={value}
                      label={token.replace(prefix, '')}
                      orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
                      value={value}
                    />
                  ),
                )}
              </SwatchStrip>
            </SwatchFamily>
          ))}
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">Semantic roles, per theme</Caption>
          <Prose>
            Both panels are the same markup under two <Text.Code>ThemeProvider</Text.Code> subtrees.
            Each swatch reads its CSS variable; the value on the right is what the theme object
            assigns to it. <Text.Code>OVERLAY</Text.Code> is the scrim behind a modal and{' '}
            <Text.Code>SHADOW</Text.Code> is the color of every shadow.
          </Prose>
          <ThemePanels>
            {SCHEMES.map(({ mode, name, theme }) => (
              <ThemeProvider key={mode} mode={mode}>
                <ThemePanel>
                  <Caption data-emphasis="ink">{name}</Caption>
                  <RoleList>
                    {THEME_ROLES.map((role) => (
                      <ColorSwatch
                        key={role}
                        color={`var(${THEME_VARIABLE_NAMES[role]})`}
                        label={role}
                        value={theme[role]}
                      />
                    ))}
                  </RoleList>
                </ThemePanel>
              </ThemeProvider>
            ))}
          </ThemePanels>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="typography" aria-labelledby="typography-title">
        <DocsSectionTitle id="typography-title">Typography</DocsSectionTitle>
        <Prose>
          The base family is Plus Jakarta Sans Variable, shipped as local assets inside the package;
          nothing is requested from a font service at runtime. Replace it by setting{' '}
          <Text.Code>--faber-ui-font-family-base</Text.Code>.
        </Prose>

        <DocsSubsection>
          <Caption data-emphasis="ink">FONT_SIZES</Caption>
          <Scale>
            {toEntries(FONT_SIZE_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="font-size" />
                {value}
                <TypeSpecimen style={{ fontSize: value }}>{SPECIMEN_TEXT}</TypeSpecimen>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">FONT_WEIGHTS</Caption>
          <Scale>
            {toEntries(FONT_WEIGHT_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="font-weight" />
                {value}
                <TypeSpecimen style={{ fontSize: FONT_SIZES.XL, fontWeight: Number(value) }}>
                  {SPECIMEN_TEXT}
                </TypeSpecimen>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="space" aria-labelledby="space-title">
        <DocsSectionTitle id="space-title">Space and size</DocsSectionTitle>
        <Prose>
          Spacing sits on a 4px grid and is used for gaps and padding. Sizes are a separate scale
          for the dimensions of controls, so a 40px button and a 16px gap never share a token by
          accident.
        </Prose>
        <Prose>
          Every value below is also a CSS custom property. Components read{' '}
          <Text.Code>var(--faber-ui-spacing-md, 16px)</Text.Code>, so setting the property on{' '}
          <Text.Code>:root</Text.Code> or on any element retunes everything inside it.
        </Prose>

        <DocsSubsection>
          <Caption data-emphasis="ink">SPACINGS</Caption>
          <Scale>
            {toEntries(SPACING_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="spacing" />
                {value}
                <ScaleVisual>
                  <Bar style={{ '--length': value }} />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">SIZES</Caption>
          <Scale>
            {toEntries(SIZE_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="size" />
                {value}
                <ScaleVisual>
                  <Square style={{ '--length': value }} />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="shape" aria-labelledby="shape-title">
        <DocsSectionTitle id="shape-title">Shape</DocsSectionTitle>

        <DocsSubsection>
          <Caption data-emphasis="ink">RADII</Caption>
          <Scale>
            {toEntries(RADIUS_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="radius" />
                {value}
                <ScaleVisual>
                  <Square style={{ '--radius': value }} />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">SHADOWS</Caption>
          <Prose>
            Three levels of elevation, all drawn in the <Text.Code>SHADOW</Text.Code> role, which
            the dark theme deepens.
          </Prose>
          <Scale>
            {ELEVATIONS.map(({ name, use }) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="shadow" />
                {use}
                <ScaleVisual>
                  <Square style={{ '--radius': RADII.MD, boxShadow: SHADOWS[name] }} />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">FOCUS_RINGS</Caption>
          <Prose>
            One ring for every interactive component: {BORDER_WIDTH_SCALE.STRONG} wide, offset by{' '}
            {FOCUS_RINGS.OFFSET}, in the <Text.Code>FOCUS_RING</Text.Code> role, and shown only for{' '}
            <Text.Code>:focus-visible</Text.Code>.
          </Prose>
          <ScaleVisual>
            <FocusSpecimen>A focused control</FocusSpecimen>
          </ScaleVisual>
          <Prose>
            Text fields are the exception. Their own border marks focus: it grows to{' '}
            {FOCUS_RINGS.FIELD_BORDER_WIDTH} and takes the primary color, with a faint halo of the
            same color around it. Focus the field to see it.
          </Prose>
          <FocusField>
            <Field label="A text field">
              <Input name="focus-specimen" placeholder="Click or tab here" />
            </Field>
          </FocusField>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="layout" aria-labelledby="layout-title">
        <DocsSectionTitle id="layout-title">Breakpoints</DocsSectionTitle>
        <Prose>
          Breakpoints are mobile-first minimum widths. They are the keys of every responsive prop on{' '}
          <Text.Code>Flex</Text.Code>, and they compile to CSS media queries; no component reads the
          viewport in JavaScript.
        </Prose>

        <DocsSubsection>
          <Caption data-emphasis="ink">BREAKPOINTS</Caption>
          <Scale>
            {breakpointEntries.map(([name, value]) => (
              <ScaleRow key={name} data-current={name === currentBreakpoint || undefined}>
                <strong>{name}</strong>
                {value}
                <ScaleVisual>
                  <Bar
                    style={{
                      '--length': `${String((Number.parseFloat(value) / Number.parseFloat(BREAKPOINTS.DESKTOP_WIDE)) * 100)}%`,
                    }}
                  />
                  {name === currentBreakpoint ? (
                    <Caption data-emphasis="markup">you are here · {viewportWidth}px</Caption>
                  ) : null}
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="more" aria-labelledby="more-title">
        <DocsSectionTitle id="more-title">The rest</DocsSectionTitle>
        <Prose>
          Line heights, letter spacing, border widths, container sizes, layers, motion, and opacity
          are tokens too. The{' '}
          <ExternalLink href={getStorybookDocsUrl('foundations-design-tokens')}>
            design tokens guide in Storybook
            <ArrowUpRightIcon />
          </ExternalLink>{' '}
          lists every table.
        </Prose>
      </DocsSection>
    </DocsLayout>
  );
}
