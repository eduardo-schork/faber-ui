'use client';

import { Title } from '@faber-ui/react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import { COMPONENT_DEMOS } from '@/components/component-demos/component-demos.ui';
import {
  DemoSurface,
  DocsSection,
  DocsSectionTitle,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { ArrowUpRightIcon } from '@faber-ui/icons';
import { ExternalLink, Caption, Prose } from '@/components/sheet/sheet.styles';
import {
  COMPONENT_CATALOG,
  COMPONENT_FAMILIES,
  formatCatalogNumber,
} from '@/site/component-catalog';
import { getStorybookDocsUrl } from '@/site/site.constants';

import { Plate, PlateBody, PlateFoot, PlateHead } from './components-page.styles';

const NUMBERED_CATALOG = COMPONENT_CATALOG.map((entry, index) => ({
  ...entry,
  number: formatCatalogNumber(index),
}));

const FAMILIES = COMPONENT_FAMILIES.map((family) => ({
  ...family,
  entries: NUMBERED_CATALOG.filter((entry) => entry.family === family.id),
  sectionId: `family-${family.id}`,
}));

const SECTIONS: readonly TDocsSectionLink[] = FAMILIES.map(({ entries, name, sectionId }) => ({
  id: sectionId,
  items: entries.map(({ name: label, slug }) => ({ id: slug, label })),
  label: name,
}));

export function ComponentsPage() {
  return (
    <DocsLayout
      kicker="Components"
      title="Every part, running."
      lead={`${String(COMPONENT_CATALOG.length)} components in ${String(COMPONENT_FAMILIES.length)} families. Each example below is the real component, next to the code that produces it and the element it puts in the DOM.`}
      sections={SECTIONS}
    >
      {FAMILIES.map(({ entries, name, sectionId }) => (
        <DocsSection key={sectionId} id={sectionId} aria-labelledby={`${sectionId}-title`}>
          <DocsSectionTitle id={`${sectionId}-title`}>{name}</DocsSectionTitle>

          {entries.map(
            ({ element, entry, name: componentName, number, ref, slug, storybookId, summary }) => {
              const { code, Demo } = COMPONENT_DEMOS[slug];

              return (
                <Plate key={slug} id={slug} aria-labelledby={`${slug}-title`}>
                  <PlateHead>
                    <Caption data-emphasis="markup">No. {number}</Caption>
                    <Title.H3 id={`${slug}-title`}>{componentName}</Title.H3>
                    <Caption>{element}</Caption>
                  </PlateHead>
                  <Prose>{summary}</Prose>
                  <PlateBody>
                    <DemoSurface>
                      <Demo />
                    </DemoSurface>
                    <CodeBlock code={code} label={`${slug}.tsx`} language="tsx" />
                  </PlateBody>
                  <PlateFoot>
                    <Caption>ref: {ref}</Caption>
                    <Caption>{entry}</Caption>
                    <ExternalLink href={getStorybookDocsUrl(storybookId)}>
                      Guide and props in Storybook
                      <ArrowUpRightIcon />
                    </ExternalLink>
                  </PlateFoot>
                </Plate>
              );
            },
          )}
        </DocsSection>
      ))}
    </DocsLayout>
  );
}
