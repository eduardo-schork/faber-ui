'use client';

import { CodeBlock as LibraryCodeBlock } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function CodeBlockDemo() {
  return (
    <DemoStack>
      <LibraryCodeBlock label="terminal" code="bun add @faber-ui/react styled-components" />
      <LibraryCodeBlock hideCopy code="No header: neither a label nor a copy button." />
    </DemoStack>
  );
}

export const CODE_BLOCK_DEMO = {
  Demo: CodeBlockDemo,
  code: `import { CodeBlock } from '@faber-ui/react/code-block';

<CodeBlock label="terminal" code="bun add @faber-ui/react styled-components" />

// Highlighted nodes go in as children; the plain code is still what is copied.
<CodeBlock code={source}>{highlight(source)}</CodeBlock>

<CodeBlock hideCopy code="No header." />`,
} satisfies TComponentDemo;
