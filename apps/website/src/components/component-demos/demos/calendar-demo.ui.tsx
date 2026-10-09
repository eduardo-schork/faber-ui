'use client';

import { Calendar } from '@faber-ui/react';
import { useState } from 'react';

import { DemoNote, DemoStack } from '../component-demos.styles';
import type { TComponentDemo } from '../component-demo.types';

function CalendarDemo() {
  const [day, setDay] = useState('2026-03-15');

  return (
    <DemoStack>
      <Calendar locale="en-US" weekStartsOn={1} value={day} onValueChange={setDay} />
      <DemoNote>Selected: {day}. Arrow keys, Home, End, and the page keys move the focus.</DemoNote>
    </DemoStack>
  );
}

export const CALENDAR_DEMO = {
  Demo: CalendarDemo,
  code: `import { Calendar } from '@faber-ui/react/calendar';

<Calendar weekStartsOn={1} value={day} onValueChange={setDay} />

// Limit the range and translate the labels.
<Calendar locale="pt-BR" min="2026-03-01" max="2026-03-31" nextMonthLabel="Próximo mês" />`,
} satisfies TComponentDemo;
