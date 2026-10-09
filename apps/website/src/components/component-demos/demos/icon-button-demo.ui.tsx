'use client';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS, IconButton } from '@faber-ui/react';
import { CheckIcon, CloseIcon, PlusIcon, TrashIcon } from '@faber-ui/icons';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function IconButtonDemo() {
  return (
    <DemoRow>
      <IconButton aria-label="Add item">
        <PlusIcon />
      </IconButton>
      <IconButton aria-label="Confirm" variant={BUTTON_VARIANTS.LIGHT}>
        <CheckIcon />
      </IconButton>
      <IconButton aria-label="Close" variant={BUTTON_VARIANTS.OUTLINE}>
        <CloseIcon />
      </IconButton>
      <IconButton
        aria-label="Delete item"
        color={BUTTON_COLORS.ACCENT}
        variant={BUTTON_VARIANTS.SUBTLE}
      >
        <TrashIcon />
      </IconButton>
      <IconButton aria-label="Add item, small" size={BUTTON_SIZES.SMALL}>
        <PlusIcon />
      </IconButton>
      <IconButton aria-label="Saving" loading>
        <CheckIcon />
      </IconButton>
    </DemoRow>
  );
}

export const ICON_BUTTON_DEMO = {
  Demo: IconButtonDemo,
  code: `import { PlusIcon, TrashIcon } from '@faber-ui/icons';
import { IconButton } from '@faber-ui/react/icon-button';

<IconButton aria-label="Add item">
  <PlusIcon />
</IconButton>

<IconButton aria-label="Delete item" color="accent" variant="subtle">
  <TrashIcon />
</IconButton>

// Omitting aria-label does not compile.`,
} satisfies TComponentDemo;
