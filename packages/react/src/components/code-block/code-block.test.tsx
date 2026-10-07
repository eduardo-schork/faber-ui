import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CodeBlockHeader, CodeBlockRoot } from './code-block.styles';
import { CodeBlock, CodeBlockCopy, CodeBlockPre } from './code-block.ui';

describe('CodeBlock', () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('SHOULD render the code in a pre element with its label and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container, getByText } = render(
      <CodeBlock ref={ref} code="bun add @faber-ui/react" label="terminal" />,
    );

    expect(container.querySelector('pre > code')?.textContent).toBe('bun add @faber-ui/react');
    expect(getByText('terminal')).toBeDefined();
    expect(ref.current?.classList.contains('faber-ui-code-block')).toBe(true);
  });

  it('SHOULD copy the source text and confirm it WHEN the copy button is pressed', async () => {
    const writeText = vi.fn(() => Promise.resolve());

    vi.stubGlobal('navigator', { clipboard: { writeText } });

    const { getByRole } = render(
      <CodeBlock code="const answer = 42;">
        <mark>const</mark> answer = 42;
      </CodeBlock>,
    );

    fireEvent.click(getByRole('button', { name: 'Copy' }));

    expect(writeText).toHaveBeenCalledWith('const answer = 42;');
    await waitFor(() => {
      expect(getByRole('button', { name: 'Copied' })).toBeDefined();
    });
  });

  it('SHOULD render no header WHEN there is no label and no copy button', () => {
    const { container, queryByRole } = render(<CodeBlock hideCopy code="plain" />);

    expect(queryByRole('button')).toBeNull();
    expect(container.querySelector('.faber-ui-code-block-header')).toBeNull();
  });

  it('SHOULD let a consumer assemble a code block from its parts', () => {
    const { getByRole, container } = render(
      <CodeBlockRoot>
        <CodeBlockPre>one line</CodeBlockPre>
        <CodeBlockHeader>
          <CodeBlockCopy code="one line" copyLabel="Copy line" />
        </CodeBlockHeader>
      </CodeBlockRoot>,
    );

    expect(container.querySelector('.faber-ui-code-block')?.firstElementChild?.tagName).toBe('PRE');
    expect(getByRole('button', { name: 'Copy line' })).toBeDefined();
  });
});
