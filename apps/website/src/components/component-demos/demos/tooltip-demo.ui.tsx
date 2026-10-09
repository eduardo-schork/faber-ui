'use client';

import {
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  IconButton,
  Tooltip,
  TOOLTIP_SIDES,
} from '@faber-ui/react';
import { CopyIcon } from '@faber-ui/icons';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';
import { toLabel } from './demo-shared';

function TooltipDemo() {
  return (
    <DemoRow>
      <Tooltip content="Copy the link">
        <IconButton aria-label="Copy" variant={BUTTON_VARIANTS.OUTLINE}>
          <CopyIcon />
        </IconButton>
      </Tooltip>
      {Object.values(TOOLTIP_SIDES).map((side) => (
        <Tooltip key={side} content={`Placed on the ${side}`} side={side}>
          <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE}>
            {toLabel(side)}
          </Button>
        </Tooltip>
      ))}
    </DemoRow>
  );
}

export const TOOLTIP_DEMO = {
  Demo: TooltipDemo,
  code: `import { CopyIcon } from '@faber-ui/icons';
import { IconButton, Tooltip } from '@faber-ui/react';

<Tooltip content="Copy the link">
  <IconButton aria-label="Copy">
    <CopyIcon />
  </IconButton>
</Tooltip>

<Tooltip content="Placed on the right" side="right">
  <Button>Right</Button>
</Tooltip>`,
} satisfies TComponentDemo;
