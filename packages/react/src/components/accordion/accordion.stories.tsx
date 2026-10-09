import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion, AccordionItem } from './accordion.ui';

const meta = {
  title: 'Components/Display/Accordion',
  component: Accordion,
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="How long does shipping take?" name="playground" open>
        Orders ship within two business days.
      </AccordionItem>
      <AccordionItem summary="Can I return an item?" name="playground">
        Returns are accepted for thirty days.
      </AccordionItem>
      <AccordionItem summary="Do you ship abroad?" name="playground">
        Yes, to most countries.
      </AccordionItem>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
