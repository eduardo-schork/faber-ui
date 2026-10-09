'use client';

import { Button, BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '@faber-ui/react';
import { useEffect, useState } from 'react';
import { CheckIcon } from '@faber-ui/icons';
import { DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';
import { toLabel } from './demo-shared';

const SAVE_DURATION = 1600;

function ButtonDemo() {
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!saving) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setSaving(false);
    }, SAVE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [saving]);

  return (
    <DemoStack>
      <DemoRow>
        {Object.values(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} variant={variant}>
            {toLabel(variant)}
          </Button>
        ))}
      </DemoRow>
      <DemoRow>
        {Object.values(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} color={BUTTON_COLORS.ACCENT} variant={variant}>
            {toLabel(variant)}
          </Button>
        ))}
      </DemoRow>
      <DemoRow>
        <Button size={BUTTON_SIZES.SMALL}>Small</Button>
        <Button size={BUTTON_SIZES.LARGE}>Large</Button>
        <Button
          loading={saving}
          startIcon={<CheckIcon />}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setSaving(true);
          }}
        >
          Save changes
        </Button>
        <Button disabled>Disabled</Button>
      </DemoRow>
    </DemoStack>
  );
}

export const BUTTON_DEMO = {
  Demo: ButtonDemo,
  code: `import { CheckIcon } from '@faber-ui/icons';
import { Button, BUTTON_VARIANTS } from '@faber-ui/react';

<Button>Filled</Button>
<Button variant={BUTTON_VARIANTS.OUTLINE}>Outline</Button>
<Button color="accent" variant="light">Light</Button>
<Button size="small">Small</Button>

<Button loading={saving} startIcon={<CheckIcon />} onClick={save}>
  Save changes
</Button>`,
} satisfies TComponentDemo;
