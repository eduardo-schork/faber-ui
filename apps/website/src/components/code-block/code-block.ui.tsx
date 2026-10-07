'use client';

import { Button, BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '@faber-ui/react';
import { useEffect, useMemo, useState } from 'react';

import { CheckIcon, CopyIcon } from '@faber-ui/icons';

import { CodeFrame, CodeHead, CodeLabel, CodePre } from './code-block.styles';
import { tokenizeCode, type TCodeLanguage } from './tokenize-code';

const COPIED_FEEDBACK_DURATION = 2000;

type TCodeBlockProps = {
  readonly code: string;
  readonly label?: string;
  readonly language: TCodeLanguage;
};

export function CodeBlock({ code, label, language }: TCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const tokens = useMemo(() => tokenizeCode(code, language), [code, language]);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setCopied(false);
    }, COPIED_FEEDBACK_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [copied]);

  const copyCode = () => {
    void navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
      },
      () => undefined,
    );
  };

  return (
    <CodeFrame>
      <CodeHead>
        <CodeLabel>{label ?? language}</CodeLabel>
        <Button
          color={copied ? BUTTON_COLORS.PRIMARY : BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          startIcon={copied ? <CheckIcon /> : <CopyIcon />}
          variant={BUTTON_VARIANTS.SUBTLE}
          onClick={copyCode}
        >
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </Button>
      </CodeHead>
      <CodePre tabIndex={0}>
        <code>
          {tokens.map(({ kind, text }, index) =>
            kind === 'plain' ? (
              text
            ) : (
              <span key={index} data-token={kind}>
                {text}
              </span>
            ),
          )}
        </code>
      </CodePre>
    </CodeFrame>
  );
}
