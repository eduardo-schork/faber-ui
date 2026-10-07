import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { AccordionContent, AccordionItemRoot, AccordionSummary } from './accordion.styles';
import { Accordion, AccordionItem } from './accordion.ui';

describe('Accordion', () => {
  afterEach(cleanup);

  it('SHOULD render native disclosure elements and forward the item ref', () => {
    const ref = createRef<HTMLDetailsElement>();
    const { getByText } = render(
      <Accordion>
        <AccordionItem ref={ref} summary="Shipping">
          Orders ship in two days.
        </AccordionItem>
      </Accordion>,
    );
    const summary = getByText('Shipping');

    expect(summary.tagName).toBe('SUMMARY');
    expect(ref.current?.tagName).toBe('DETAILS');
    expect(ref.current?.open).toBe(false);
    expect(ref.current?.querySelector('[data-accordion-content]')?.textContent).toBe(
      'Orders ship in two days.',
    );
  });

  it('SHOULD forward native open and name attributes for grouping', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem summary="Shipping" name="faq" open>
          Two days.
        </AccordionItem>
        <AccordionItem summary="Returns" name="faq">
          Thirty days.
        </AccordionItem>
      </Accordion>,
    );
    const items = container.querySelectorAll('details');

    expect(items[0]?.open).toBe(true);
    expect(items[0]?.getAttribute('name')).toBe('faq');
    expect(items[1]?.open).toBe(false);
  });

  it('SHOULD let a consumer assemble an item from its parts', () => {
    const { getByText } = render(
      <Accordion>
        <AccordionItemRoot open>
          <AccordionSummary>
            Shipping <span>2 days</span>
          </AccordionSummary>
          <AccordionContent>Orders ship quickly.</AccordionContent>
        </AccordionItemRoot>
      </Accordion>,
    );
    const summary = getByText('2 days').parentElement;

    expect(summary?.tagName).toBe('SUMMARY');
    expect(summary?.parentElement?.tagName).toBe('DETAILS');
    expect(summary?.nextElementSibling?.textContent).toBe('Orders ship quickly.');
  });
});
