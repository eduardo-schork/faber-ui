import { forwardRef } from 'react';

import {
  AccordionContent,
  AccordionSummary,
  StyledAccordion,
  AccordionItemRoot,
} from './accordion.styles';
import type { TAccordionItemProps, TAccordionProps } from './accordion.types';

export const Accordion = forwardRef<HTMLDivElement, TAccordionProps>(
  function Accordion(props, ref) {
    return <StyledAccordion {...props} ref={ref} />;
  },
);

export const AccordionItem = forwardRef<HTMLDetailsElement, TAccordionItemProps>(
  function AccordionItem({ children, summary, ...nativeProps }, ref) {
    return (
      <AccordionItemRoot {...nativeProps} ref={ref}>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionContent data-accordion-content>{children}</AccordionContent>
      </AccordionItemRoot>
    );
  },
);
