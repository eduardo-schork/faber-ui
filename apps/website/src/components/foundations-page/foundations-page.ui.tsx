'use client';

import {
  ANIMATIONS,
  BORDER_WIDTH_SCALE,
  BREAKPOINTS,
  CONTAINER_SIZES,
  DARK_THEME,
  FOCUS_RINGS,
  FONT_SIZES,
  FONT_SIZE_SCALE,
  FONT_WEIGHT_SCALE,
  Field,
  Input,
  LETTER_SPACING_SCALE,
  LIGHT_THEME,
  LINE_HEIGHT_SCALE,
  OPACITIES,
  PALETTE,
  RADIUS_SCALE,
  SIZES,
  SIZE_SCALE,
  SPACING_SCALE,
  THEME_MODES,
  THEME_VARIABLE_NAMES,
  Text,
  ThemeProvider,
  Z_INDICES,
  type TTheme,
  type TThemeTokenName,
} from '@faber-ui/react';
import { useSyncExternalStore } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DocsSection,
  DocsSectionTitle,
  DocsSubsection,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { Caption, Prose, Run } from '@/components/sheet/sheet.styles';

import {
  Bar,
  FocusField,
  FocusSpecimen,
  Role,
  RoleList,
  Scale,
  ScaleRow,
  ScaleVisual,
  Square,
  Stroke,
  Swatch,
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
  { id: 'layout', label: 'Layout' },
  { id: 'motion', label: 'Motion and opacity' },
];

const PALETTE_FAMILIES = [
  { name: 'Malachite', prefix: 'MALACHITE_', role: 'primary' },
  { name: 'Hot Copper', prefix: 'COPPER_', role: 'accent' },
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
PALETTE.MALACHITE_400; // 'hsl(147 57% 33%)'

// 2. A semantic role: what the color is for. This is a CSS variable.
COLORS.PRIMARY; // 'var(--faber-ui-color-primary, hsl(147 57% 33%))'

// 3. Components only ever read roles.
const Card = styled.section\`
  color: \${COLORS.TEXT_PRIMARY};
  background: \${COLORS.SURFACE_PRIMARY};
  border-radius: \${RADII.LG};
  padding: \${SPACINGS.LG};
\`;`;

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
      lead="Nineteen typed objects hold every visual decision in the library. This page is drawn directly from them, so what you see is what the package exports."
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
                    <Swatch key={token} style={{ '--swatch': value }}>
                      <strong>{token.replace(prefix, '')}</strong>
                      {value}
                    </Swatch>
                  ),
                )}
              </SwatchStrip>
            </SwatchFamily>
          ))}
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">Semantic roles, per theme</Caption>
          <Prose>
            <Text.Code>OVERLAY</Text.Code> is the scrim behind a modal. It is a translucent dark in
            both themes, and deeper in the dark one, so the page behind a dialog always recedes.
          </Prose>
          <Prose>
            Both panels are the same markup under two <Text.Code>ThemeProvider</Text.Code> subtrees.
            Each swatch reads its CSS variable; the value on the right is what the theme object
            assigns to it.
          </Prose>
          <ThemePanels>
            {SCHEMES.map(({ mode, name, theme }) => (
              <ThemeProvider key={mode} mode={mode}>
                <ThemePanel>
                  <Caption data-emphasis="ink">{name}</Caption>
                  <RoleList>
                    {THEME_ROLES.map((role) => (
                      <Role key={role} style={{ '--swatch': `var(${THEME_VARIABLE_NAMES[role]})` }}>
                        <strong>{role}</strong>
                        <Run>{theme[role]}</Run>
                      </Role>
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

        <DocsSubsection>
          <Caption data-emphasis="ink">LINE_HEIGHTS</Caption>
          <Scale>
            {toEntries(LINE_HEIGHT_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="line-height" />
                {value}
                <Run>× the font size</Run>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">LETTER_SPACINGS</Caption>
          <Scale>
            {toEntries(LETTER_SPACING_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="letter-spacing" />
                {value}
                <TypeSpecimen style={{ letterSpacing: value }}>
                  Plain parts, properly made.
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
          <Text.Code>:root</Text.Code> or on any element retunes everything inside it. The raw
          values are exported as <Text.Code>SPACING_SCALE</Text.Code>,{' '}
          <Text.Code>SIZE_SCALE</Text.Code>, and so on for use in JavaScript.
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
          <Caption data-emphasis="ink">BORDER_WIDTHS</Caption>
          <Scale>
            {toEntries(BORDER_WIDTH_SCALE).map(([name, value]) => (
              <ScaleRow key={name}>
                <TokenName name={name} prefix="border-width" />
                {value}
                <ScaleVisual>
                  <Stroke style={{ '--length': value }} />
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
            {FOCUS_RINGS.FIELD_BORDER_WIDTH} and takes a gradient of the primary roles, so nothing
            is drawn outside the control. Focus the field to see it.
          </Prose>
          <FocusField>
            <Field label="A text field">
              <Input name="focus-specimen" placeholder="Click or tab here" />
            </Field>
          </FocusField>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="layout" aria-labelledby="layout-title">
        <DocsSectionTitle id="layout-title">Layout</DocsSectionTitle>
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

        <DocsSubsection>
          <Caption data-emphasis="ink">CONTAINER_SIZES</Caption>
          <Scale>
            {toEntries(CONTAINER_SIZES).map(([name, value]) => (
              <ScaleRow key={name}>
                <strong>{name}</strong>
                {value}
                <ScaleVisual>
                  <Bar
                    style={{
                      '--length': `${String((Number.parseFloat(value) / Number.parseFloat(BREAKPOINTS.DESKTOP_WIDE)) * 100)}%`,
                    }}
                  />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">Z_INDICES</Caption>
          <Scale>
            {toEntries(Z_INDICES).map(([name, value]) => (
              <ScaleRow key={name}>
                <strong>{name}</strong>
                {value}
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>
      </DocsSection>

      <DocsSection id="motion" aria-labelledby="motion-title">
        <DocsSectionTitle id="motion-title">Motion and opacity</DocsSectionTitle>
        <Prose>
          Motion is deliberately small: one fast duration for state changes, one for the spinner,
          one for the skeleton pulse. Every animated component switches it off under{' '}
          <Text.Code>prefers-reduced-motion</Text.Code>.
        </Prose>

        <DocsSubsection>
          <Caption data-emphasis="ink">ANIMATIONS</Caption>
          <Scale>
            {toEntries(ANIMATIONS).map(([name, value]) => (
              <ScaleRow key={name}>
                <strong>{name}</strong>
                {value}
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>

        <DocsSubsection>
          <Caption data-emphasis="ink">OPACITIES</Caption>
          <Scale>
            {toEntries(OPACITIES).map(([name, value]) => (
              <ScaleRow key={name}>
                <strong>{name}</strong>
                {value}
                <ScaleVisual>
                  <Bar style={{ '--length': SIZES.XXL, opacity: value }} />
                </ScaleVisual>
              </ScaleRow>
            ))}
          </Scale>
        </DocsSubsection>
      </DocsSection>
    </DocsLayout>
  );
}
