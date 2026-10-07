import { forwardRef, useEffect, useState, type ReactNode } from 'react';

import { Button, BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { CODE_BLOCK_COPIED_DURATION } from './code-block.constants';
import {
  CodeBlockHeader,
  CodeBlockLabel,
  CodeBlockRoot,
  StyledCodeBlockPre,
} from './code-block.styles';
import type { TCodeBlockCopyProps, TCodeBlockPreProps, TCodeBlockProps } from './code-block.types';

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

export const CodeBlockCopy = forwardRef<HTMLButtonElement, TCodeBlockCopyProps>(
  function CodeBlockCopy(
    { code, copiedLabel = 'Copied', copyLabel = 'Copy', onClick, ...buttonProps },
    ref,
  ) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      if (!copied) {
        return undefined;
      }

      const timeout = setTimeout(() => {
        setCopied(false);
      }, CODE_BLOCK_COPIED_DURATION);

      return () => {
        clearTimeout(timeout);
      };
    }, [copied]);

    return (
      <Button
        color={BUTTON_COLORS.NEUTRAL}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_VARIANTS.SUBTLE}
        {...buttonProps}
        ref={ref}
        aria-live="polite"
        data-copied={copied || undefined}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          // The clipboard is unavailable in insecure contexts; the button then stays unconfirmed.
          void navigator.clipboard.writeText(code).then(
            () => {
              setCopied(true);
            },
            () => undefined,
          );
        }}
      >
        {copied ? copiedLabel : copyLabel}
      </Button>
    );
  },
);

/** The scrollable code region. It is focusable so keyboard users can scroll long lines. */
export const CodeBlockPre = forwardRef<HTMLPreElement, TCodeBlockPreProps>(function CodeBlockPre(
  { children, tabIndex = 0, ...nativeProps },
  ref,
) {
  return (
    <StyledCodeBlockPre {...nativeProps} ref={ref} tabIndex={tabIndex}>
      <code>{children}</code>
    </StyledCodeBlockPre>
  );
});

export const CodeBlock = forwardRef<HTMLDivElement, TCodeBlockProps>(function CodeBlock(
  { children, code, copiedLabel, copyLabel, hideCopy = false, label, ...rootProps },
  ref,
) {
  const showHeader = hasContent(label) || !hideCopy;

  return (
    <CodeBlockRoot {...rootProps} ref={ref}>
      {showHeader ? (
        <CodeBlockHeader>
          <CodeBlockLabel>{label}</CodeBlockLabel>
          {hideCopy ? null : (
            <CodeBlockCopy
              code={code}
              {...(copiedLabel === undefined ? {} : { copiedLabel })}
              {...(copyLabel === undefined ? {} : { copyLabel })}
            />
          )}
        </CodeBlockHeader>
      ) : null}
      <CodeBlockPre>{children ?? code}</CodeBlockPre>
    </CodeBlockRoot>
  );
});
