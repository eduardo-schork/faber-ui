'use client';

import { Segment, SegmentedControl } from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';
import { toLabel } from './demo-shared';

function SegmentedControlDemo() {
  const [view, setView] = useState('board');

  return (
    <DemoStack>
      <SegmentedControl label="View">
        {['list', 'board', 'timeline'].map((option) => (
          <Segment
            key={option}
            name="demo-view"
            value={option}
            checked={view === option}
            onChange={() => {
              setView(option);
            }}
          >
            {toLabel(option)}
          </Segment>
        ))}
      </SegmentedControl>
      <SegmentedControl label="Billing period" labelHidden size="small">
        <Segment name="demo-billing" value="monthly" defaultChecked>
          Monthly
        </Segment>
        <Segment name="demo-billing" value="yearly">
          Yearly
        </Segment>
        <Segment name="demo-billing" value="lifetime" disabled>
          Lifetime
        </Segment>
      </SegmentedControl>
      <DemoNote role="status">Showing the {view} view.</DemoNote>
    </DemoStack>
  );
}

export const SEGMENTED_CONTROL_DEMO = {
  Demo: SegmentedControlDemo,
  code: `import { Segment, SegmentedControl } from '@faber-ui/react';

<SegmentedControl label="View">
  <Segment name="view" value="list" checked={view === 'list'} onChange={selectList}>
    List
  </Segment>
  <Segment name="view" value="board" checked={view === 'board'} onChange={selectBoard}>
    Board
  </Segment>
</SegmentedControl>

// Uncontrolled, with the legend kept for screen readers only.
<SegmentedControl label="Billing period" labelHidden size="small">
  <Segment name="billing" value="monthly" defaultChecked>Monthly</Segment>
  <Segment name="billing" value="yearly">Yearly</Segment>
</SegmentedControl>`,
} satisfies TComponentDemo;
