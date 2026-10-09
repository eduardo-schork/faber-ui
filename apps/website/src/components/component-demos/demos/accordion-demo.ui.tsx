'use client';

import { Accordion, AccordionItem } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem summary="How long does shipping take?" name="demo-faq" open>
        Orders ship within two business days.
      </AccordionItem>
      <AccordionItem summary="Can I return an item?" name="demo-faq">
        Returns are accepted for thirty days.
      </AccordionItem>
      <AccordionItem summary="Do you ship abroad?" name="demo-faq">
        Yes, to most countries.
      </AccordionItem>
    </Accordion>
  );
}

export const ACCORDION_DEMO = {
  Demo: AccordionDemo,
  code: `import { Accordion, AccordionItem } from '@faber-ui/react/accordion';

// Items that share a name close each other.
<Accordion>
  <AccordionItem summary="How long does shipping take?" name="faq" open>
    Orders ship within two business days.
  </AccordionItem>
  <AccordionItem summary="Can I return an item?" name="faq">
    Returns are accepted for thirty days.
  </AccordionItem>
</Accordion>`,
} satisfies TComponentDemo;
