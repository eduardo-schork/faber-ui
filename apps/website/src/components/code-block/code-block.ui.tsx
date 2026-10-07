'use client';

import { useMemo } from 'react';

import { HighlightedCode } from './code-block.styles';
import { tokenizeCode, type TCodeLanguage } from './tokenize-code';

type TCodeBlockProps = {
  readonly code: string;
  readonly label?: string;
  readonly language: TCodeLanguage;
};

/** The library CodeBlock fed with this site's tokenizer output. */
export function CodeBlock({ code, label, language }: TCodeBlockProps) {
  const tokens = useMemo(() => tokenizeCode(code, language), [code, language]);

  return (
    <HighlightedCode code={code} label={label ?? language}>
      {tokens.map(({ kind, text }, index) =>
        kind === 'plain' ? (
          text
        ) : (
          // A syntax token is a run of inherited text, so it stays a bare span.
          <span key={index} data-token={kind}>
            {text}
          </span>
        ),
      )}
    </HighlightedCode>
  );
}
