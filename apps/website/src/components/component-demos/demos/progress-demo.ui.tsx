'use client';

import { Button, BUTTON_SIZES, BUTTON_VARIANTS, Progress } from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function ProgressDemo() {
  const [uploaded, setUploaded] = useState(35);

  return (
    <DemoStack>
      <Progress label="Uploading report" value={uploaded} max={100} />
      <DemoRow>
        <Button
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setUploaded((current) => (current >= 100 ? 0 : current + 15));
          }}
        >
          Advance
        </Button>
        <DemoNote role="status">{Math.min(uploaded, 100)}% uploaded.</DemoNote>
      </DemoRow>
      <Progress label="Syncing" />
    </DemoStack>
  );
}

export const PROGRESS_DEMO = {
  Demo: ProgressDemo,
  code: `import { Progress } from '@faber-ui/react/progress';

<Progress label="Uploading report" value={uploaded} max={100} />

// Without a value the bar is indeterminate.
<Progress label="Syncing" />`,
} satisfies TComponentDemo;
