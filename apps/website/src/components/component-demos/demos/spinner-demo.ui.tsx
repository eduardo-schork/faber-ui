'use client';

import { Button, Spinner, SPINNER_SIZES, Text } from '@faber-ui/react';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function SpinnerDemo() {
  return (
    <DemoRow>
      <Spinner label="Loading, small" size={SPINNER_SIZES.SMALL} />
      <Spinner label="Loading" />
      <Spinner label="Loading, large" size={SPINNER_SIZES.LARGE} />
      <Text.Span>
        <Spinner decorative size={SPINNER_SIZES.CURRENT} /> Syncing at the size of this text
      </Text.Span>
      <Button loading>Saving</Button>
    </DemoRow>
  );
}

export const SPINNER_DEMO = {
  Demo: SpinnerDemo,
  code: `import { Spinner } from '@faber-ui/react/spinner';

<Spinner label="Loading" />
<Spinner label="Loading, large" size="large" />

// Inside a control that is already labeled and busy.
<Spinner decorative size="current" />`,
} satisfies TComponentDemo;
