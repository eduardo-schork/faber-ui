'use client';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Box,
  DescriptionDetails,
  DescriptionItem,
  DescriptionTerm,
  LinkButton,
  TYPOGRAPHY_SIZES,
  Text,
  Title,
} from '@faber-ui/react';
import NextLink from 'next/link';

import { ButtonAnatomy } from '@/components/button-anatomy/button-anatomy.ui';
import { CodeBlock } from '@/components/code-block/code-block.ui';
import type { TCodeLanguage } from '@/components/code-block/tokenize-code';
import { ArrowRightIcon } from '@faber-ui/icons';
import { RecastPanel } from '@/components/recast-panel/recast-panel.ui';
import {
  Band,
  BandIntro,
  BandTitle,
  Caption,
  Lead,
  PageWidth,
  Prose,
  Rail,
  RailContent,
  RailLabel,
  Run,
} from '@/components/sheet/sheet.styles';
import {
  COMPONENT_CATALOG,
  COMPONENT_FAMILIES,
  formatCatalogNumber,
} from '@/site/component-catalog';
import { PACKAGE_VERSION } from '@/site/site.constants';

import {
  FamilyIndex,
  FamilyParts,
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
    claim: 'No provider to mount, no sx prop to learn.',
    detail:
      'Components are ordinary styled-components targets. Extend them with styled(), attrs(), className, or style; nothing has to be wrapped first.',
    label: 'toolbar-action.ts',
    language: 'tsx',
    code: `const ToolbarAction = styled(Button).attrs({ variant: 'subtle' })\`
  margin-inline-start: \${SPACINGS.SM};
\`;`,
  },
];

const TOKEN_TABLE_COUNT = 19;

const FAMILIES = COMPONENT_FAMILIES.map((family) => ({
  ...family,
  entries: COMPONENT_CATALOG.filter((entry) => entry.family === family.id),
}));

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
              <Caption data-emphasis="ink">Customization</Caption>
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
                <BandTitle id="ledger-title">Four claims, each with a place to check it.</BandTitle>
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
                  {COMPONENT_CATALOG.length} components in {COMPONENT_FAMILIES.length} families.
                  Every name opens a live example with its code.
                </Lead>
              </BandIntro>
              <FamilyIndex>
                {FAMILIES.map(({ entries, id, name }) => (
                  <DescriptionItem key={id}>
                    <DescriptionTerm>{name}</DescriptionTerm>
                    <FamilyParts>
                      {entries.map(({ name: componentName, slug }) => (
                        <PartLink key={slug} href={`/docs/components#${slug}`}>
                          {componentName}
                        </PartLink>
                      ))}
                    </FamilyParts>
                  </DescriptionItem>
                ))}
              </FamilyIndex>
            </RailContent>
          </Rail>
        </PageWidth>
      </Band>
    </Box>
  );
}
