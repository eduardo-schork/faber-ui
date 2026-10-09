import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from './calendar.ui';

const meta = {
  title: 'Components/Forms/Calendar',
  component: Calendar,
  args: {
    defaultValue: '2026-03-15',
    locale: 'en-US',
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const LimitedRange: TStory = {
  args: { min: '2026-03-10', max: '2026-03-24' },
};

export const MondayFirstInPortuguese: TStory = {
  args: {
    locale: 'pt-BR',
    weekStartsOn: 1,
    previousMonthLabel: 'Mês anterior',
    nextMonthLabel: 'Próximo mês',
  },
};
