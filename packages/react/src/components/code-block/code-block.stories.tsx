import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodeBlock } from './code-block.ui';

const meta = {
  title: 'Molecules/CodeBlock',
  component: CodeBlock,
  args: {
    code: "import { Button } from '@faber-ui/react';\n\n<Button>Publish</Button>;",
    label: 'app.tsx',
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const WithoutHeader: TStory = { args: { hideCopy: true, label: undefined } };
