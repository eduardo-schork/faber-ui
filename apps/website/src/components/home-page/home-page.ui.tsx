'use client';

import {
  ALERT_COLORS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Box,
  DescriptionDetails,
  DescriptionItem,
  DescriptionTerm,
  LIST_MARKERS,
  LinkButton,
  List,
  ListItem,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  Text,
  Title,
} from '@faber-ui/react';
import NextLink from 'next/link';

import { ButtonAnatomy } from '@/components/button-anatomy/button-anatomy.ui';
import { CodeBlock } from '@/components/code-block/code-block.ui';
import type { TCodeLanguage } from '@/components/code-block/tokenize-code';
import { ArrowRightIcon, ArrowUpRightIcon } from '@faber-ui/icons';
import { RecastPanel } from '@/components/recast-panel/recast-panel.ui';
import {
  Band,
  BandIntro,
  BandTitle,
  Caption,
  ExternalLink,
  Lead,
  PageWidth,
  Prose,
  Rail,
  RailContent,
  RailLabel,
  Run,
  TextLink,
} from '@/components/sheet/sheet.styles';
import {
  COMPONENT_CATALOG,
  COMPONENT_FAMILIES,
  formatCatalogNumber,
} from '@/site/component-catalog';
import { PACKAGE_VERSION, SITE_LINKS } from '@/site/site.constants';

import {
  HeroActions,
  HeroBand,
  HeroCopy,
  HeroFacts,
  HeroGrid,
  HeroTitle,
  Ledger,
  LedgerClaim,
  LedgerRow,
  PartLink,
  PartsTable,
  StartGrid,
  StatusNote,
  Step,
  Steps,
} from './home-page.styles';

type TLedgerEntry = {
  readonly claim: string;
  readonly code: string;
  readonly detail: string;
  readonly label: string;
  readonly language: TCodeLanguage;
};

const LEDGER: readonly TLedgerEntry[] = [
  {
    claim: 'The native element is still there.',
    detail:
      'Every component renders the element you would have written by hand, forwards its attributes and events, and hands the ref to the real DOM node.',
    label: 'checkout.tsx',
    language: 'tsx',
    code: `const ref = useRef<HTMLButtonElement>(null);

<Button ref={ref} form="checkout" type="submit">
  Pay now
</Button>`,
  },
  {
    claim: 'Options are typed, and spelled two ways.',
    detail:
      'Closed options are exported as constants and accepted as string literals. Either way, the compiler rejects a variant that does not exist.',
    label: 'toolbar.tsx',
    language: 'tsx',
    code: `<Button variant={BUTTON_VARIANTS.OUTLINE}>Export</Button>
<Button variant="outline">Export</Button>`,
  },
  {
    claim: 'Accessible names are part of the types.',
    detail:
      'An icon-only button without a label, or a meaningful spinner without one, is a type error instead of an audit finding.',
    label: 'dialog.tsx',
    language: 'tsx',
    code: `<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>

<Spinner label="Loading invoices" />
<Spinner decorative />`,
  },
  {
    claim: 'No raw values in component source.',
    detail:
      'A lint rule in the repository fails when a component hard-codes a color, a length, or a duration. Visual decisions come from the token tables.',
    label: 'button.styles.ts',
    language: 'tsx',
    code: `// enforced by @faber-ui/no-hardcoded-design-values
height: \${SIZES.MD};
padding: \${SPACINGS.NONE} \${SPACINGS.MD};
border-radius: \${RADII.MD};`,
  },
  {
    claim: 'Themes work without React.',
    detail:
      'Light, dark, and system are attribute selectors over CSS variables. The provider is there for when a subtree needs a typed theme object.',
    label: 'index.html',
    language: 'html',
    code: `<html data-theme="system">
  <section data-theme="dark">Always dark</section>
</html>`,
  },
  {
    claim: 'No provider to mount, no sx prop to learn.',
    detail:
      'Components are ordinary styled-components targets. Extend them with styled(), attrs(), className, or style; nothing has to be wrapped first.',
    label: 'toolbar-action.ts',
    language: 'tsx',
    code: `const ToolbarAction = styled(Button).attrs({ variant: 'subtle' })\`
  margin-inline-start: \${SPACINGS.SM};
\`;`,
  },
  {
    claim: 'One install, an entry point per component.',
    detail:
      'The React package re-exports tokens and themes and ships ESM only. Import from the root, or from a component path when the dependency should be explicit.',
    label: 'imports.ts',
    language: 'tsx',
    code: `import { Button, SPACINGS } from '@faber-ui/react';
import { Button } from '@faber-ui/react/button';`,
  },
];

const TOKEN_TABLE_COUNT = 19;

const FAMILY_NAMES = Object.fromEntries(
  COMPONENT_FAMILIES.map(({ id, name }) => [id, name]),
) as Readonly<Record<(typeof COMPONENT_FAMILIES)[number]['id'], string>>;

const INSTALL_CODE = `bun add @faber-ui/react styled-components`;

const STYLES_CODE = `// app/layout.tsx, or the entry file of a Vite app
import '@faber-ui/react/styles.css';`;

const COMPOSE_CODE = `import { Button, Field, Input, VFlex } from '@faber-ui/react';

export function InviteForm() {
  return (
    <form>
      <VFlex gap="MD">
        <Field label="Email" description="We only send the invitation.">
          <Input name="email" type="email" required />
        </Field>
        <Button type="submit">Send invitation</Button>
      </VFlex>
    </form>
  );
}`;

export function HomePage() {
  return (
    <Box as="main">
      <HeroBand>
        <PageWidth>
          <HeroGrid>
            <HeroCopy>
              <Caption>@faber-ui/react · v{PACKAGE_VERSION} · MIT · React 18 and 19</Caption>
              <HeroTitle>
                Plain parts,
                <Run>properly made.</Run>
              </HeroTitle>
              <Lead>
                Faber UI is a React design system that keeps the platform in view. A Button is a{' '}
                <Text.Code size={TYPOGRAPHY_SIZES.SMALL}>{'<button>'}</Text.Code>. A Select is a{' '}
                <Text.Code size={TYPOGRAPHY_SIZES.SMALL}>{'<select>'}</Text.Code>. You get typed
                props on top, design tokens inside, and CSS variables at the edge.
              </Lead>
              <HeroActions>
                <LinkButton
                  as={NextLink}
                  href="/docs"
                  size={BUTTON_SIZES.LARGE}
                  endIcon={<ArrowRightIcon />}
                >
                  Get started
                </LinkButton>
                <LinkButton
                  as={NextLink}
                  href="/docs/components"
                  size={BUTTON_SIZES.LARGE}
                  color={BUTTON_COLORS.NEUTRAL}
                  variant={BUTTON_VARIANTS.OUTLINE}
                >
                  Browse the components
                </LinkButton>
              </HeroActions>
              <HeroFacts>
                <DescriptionItem>
                  <DescriptionTerm>components</DescriptionTerm>
                  <DescriptionDetails>{COMPONENT_CATALOG.length}</DescriptionDetails>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionTerm>token tables</DescriptionTerm>
                  <DescriptionDetails>{TOKEN_TABLE_COUNT}</DescriptionDetails>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionTerm>themes, plus system</DescriptionTerm>
                  <DescriptionDetails>2</DescriptionDetails>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionTerm>required providers</DescriptionTerm>
                  <DescriptionDetails>0</DescriptionDetails>
                </DescriptionItem>
              </HeroFacts>
            </HeroCopy>

            <ButtonAnatomy />
          </HeroGrid>
        </PageWidth>
      </HeroBand>

      <Band aria-labelledby="recast-title">
        <PageWidth>
          <Rail>
            <RailLabel>
              <Caption data-emphasis="markup">§ 01</Caption>
              <Caption data-emphasis="ink">Theming</Caption>
            </RailLabel>
            <RailContent>
              <BandIntro>
                <BandTitle id="recast-title">Recast the whole site in another material.</BandTitle>
                <Lead>
                  Color reaches every component through semantic CSS variables. Pick a material and
                  this page, the header, and the figure above all re-read the same nine properties.
                </Lead>
              </BandIntro>
              <RecastPanel />
            </RailContent>
          </Rail>
        </PageWidth>
      </Band>

      <Band aria-labelledby="ledger-title">
        <PageWidth>
          <Rail>
            <RailLabel>
              <Caption data-emphasis="markup">§ 02</Caption>
              <Caption data-emphasis="ink">Principles</Caption>
            </RailLabel>
            <RailContent>
              <BandIntro>
                <BandTitle id="ledger-title">
                  Seven claims, each with a place to check it.
                </BandTitle>
                <Lead>
                  A design system earns trust by being inspectable. These are the decisions the
                  library is built on, next to the code that shows them.
                </Lead>
              </BandIntro>
              <Ledger>
                {LEDGER.map(({ claim, code, detail, label, language }, index) => (
                  <LedgerRow key={claim}>
                    <Caption data-emphasis="markup">{formatCatalogNumber(index)}</Caption>
                    <LedgerClaim>
                      <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>{claim}</Title.H3>
                      <Prose>{detail}</Prose>
                    </LedgerClaim>
                    <CodeBlock code={code} label={label} language={language} />
                  </LedgerRow>
                ))}
              </Ledger>
            </RailContent>
          </Rail>
        </PageWidth>
      </Band>

      <Band aria-labelledby="parts-title">
        <PageWidth>
          <Rail>
            <RailLabel>
              <Caption data-emphasis="markup">§ 03</Caption>
              <Caption data-emphasis="ink">Components</Caption>
            </RailLabel>
            <RailContent>
              <BandIntro>
                <BandTitle id="parts-title">The parts list.</BandTitle>
                <Lead>
                  {COMPONENT_CATALOG.length} components in {COMPONENT_FAMILIES.length} families. The
                  second column is what each one puts in the DOM; every row opens a live example.
                </Lead>
              </BandIntro>
              <PartsTable>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Component</th>
                    <th scope="col">Renders</th>
                    <th scope="col" data-column="ref">
                      Ref
                    </th>
                    <th scope="col" data-column="family">
                      Family
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPONENT_CATALOG.map(({ element, family, name, ref, slug }, index) => (
                    <tr key={slug}>
                      <td>{formatCatalogNumber(index)}</td>
                      <th scope="row">
                        <PartLink href={`/docs/components#${slug}`}>{name}</PartLink>
                      </th>
                      <td>{element}</td>
                      <td data-column="ref">{ref}</td>
                      <td data-column="family">{FAMILY_NAMES[family]}</td>
                    </tr>
                  ))}
                </tbody>
              </PartsTable>
            </RailContent>
          </Rail>
        </PageWidth>
      </Band>

      <Band aria-labelledby="start-title">
        <PageWidth>
          <Rail>
            <RailLabel>
              <Caption data-emphasis="markup">§ 04</Caption>
              <Caption data-emphasis="ink">Start</Caption>
            </RailLabel>
            <RailContent>
              <BandIntro>
                <BandTitle id="start-title">Three steps to a first screen.</BandTitle>
              </BandIntro>
              <StartGrid>
                <Steps>
                  <Step>
                    <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>
                      1. Install one package and its peer
                    </Title.H3>
                    <CodeBlock code={INSTALL_CODE} label="terminal" language="bash" />
                  </Step>
                  <Step>
                    <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>
                      2. Load the theme variables and the font once
                    </Title.H3>
                    <CodeBlock code={STYLES_CODE} label="entry file" language="tsx" />
                  </Step>
                  <Step>
                    <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>3. Compose</Title.H3>
                    <CodeBlock code={COMPOSE_CODE} label="invite-form.tsx" language="tsx" />
                  </Step>
                </Steps>

                <StatusNote
                  color={ALERT_COLORS.ACCENT}
                  title={`Status · v${PACKAGE_VERSION}`}
                  aria-label="Project status"
                >
                  <Text.P>
                    The packages are not on npm yet. Until the first release, clone the repository
                    and run this site or Storybook locally.
                  </Text.P>
                  <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
                    Next on the bench: a full WCAG 2.2 AA contrast audit, real-browser tests for the
                    overlay components, and the first published release.
                  </Text.P>
                  <List marker={LIST_MARKERS.NONE}>
                    <ListItem>
                      <TextLink href="/docs">
                        Read the getting started guide
                        <ArrowRightIcon />
                      </TextLink>
                    </ListItem>
                    <ListItem>
                      <ExternalLink href={SITE_LINKS.STORYBOOK}>
                        Open Storybook
                        <ArrowUpRightIcon />
                      </ExternalLink>
                    </ListItem>
                    <ListItem>
                      <ExternalLink href={SITE_LINKS.REPOSITORY}>
                        View the source on GitHub
                        <ArrowUpRightIcon />
                      </ExternalLink>
                    </ListItem>
                  </List>
                </StatusNote>
              </StartGrid>
            </RailContent>
          </Rail>
        </PageWidth>
      </Band>
    </Box>
  );
}
