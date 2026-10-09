'use client';

import { Alert, ALERT_COLORS } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function AlertDemo() {
  return (
    <DemoStack>
      <Alert title="Early release" color={ALERT_COLORS.ACCENT}>
        APIs may change before version 1.0.
      </Alert>
      <Alert title="Saved" color={ALERT_COLORS.PRIMARY}>
        Your changes are live.
      </Alert>
      <Alert color={ALERT_COLORS.ERROR}>The payment could not be processed.</Alert>
      <Alert>A neutral note without a title.</Alert>
    </DemoStack>
  );
}

export const ALERT_DEMO = {
  Demo: AlertDemo,
  code: `import { Alert, ALERT_COLORS } from '@faber-ui/react/alert';

<Alert title="Early release" color={ALERT_COLORS.ACCENT}>
  APIs may change before version 1.0.
</Alert>

// Announced immediately by screen readers.
<Alert role="alert" color={ALERT_COLORS.ERROR}>
  The payment could not be processed.
</Alert>`,
} satisfies TComponentDemo;
