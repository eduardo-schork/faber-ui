import { describe, expect, it } from 'vitest';

import { tokenizeCode } from './tokenize-code';

const kindsOf = (code: string, language: Parameters<typeof tokenizeCode>[1]) =>
  tokenizeCode(code, language)
    .filter(({ kind }) => kind !== 'plain')
    .map(({ kind, text }) => `${kind}:${text}`);

describe('tokenizeCode', () => {
  it('SHOULD reproduce the source text exactly', () => {
    const code = "import { Button } from '@faber-ui/react';\n\n<Button loading>Saving</Button>;";

    expect(
      tokenizeCode(code, 'tsx')
        .map(({ text }) => text)
        .join(''),
    ).toBe(code);
  });

  it('SHOULD mark imports, strings, and JSX tags WHEN the language is tsx', () => {
    expect(kindsOf("import { Button } from '@faber-ui/react';", 'tsx')).toEqual([
      'keyword:import',
      'keyword:from',
      "string:'@faber-ui/react'",
    ]);
    expect(kindsOf('<Text.P tone="secondary">Body</Text.P>', 'tsx')).toEqual([
      'tag:<Text.P',
      'string:"secondary"',
      'tag:>',
      'tag:</Text.P>',
    ]);
  });

  it('SHOULD leave attribute names and arrow functions plain WHEN they resemble keywords or tags', () => {
    expect(kindsOf('<Button type="submit" onClick={() => save()}>', 'tsx')).toEqual([
      'tag:<Button',
      'string:"submit"',
      'operator:=>',
      'tag:>',
    ]);
  });

  it('SHOULD keep a comment marker inside a string as part of the string', () => {
    expect(kindsOf("const url = 'http://localhost:6006';", 'tsx')).toEqual([
      'keyword:const',
      "string:'http://localhost:6006'",
    ]);
  });

  it('SHOULD mark custom properties and comments WHEN the language is css', () => {
    expect(
      kindsOf('/* brand */\n:root {\n  --faber-ui-color-primary: hsl(1 2% 3%);\n}', 'css'),
    ).toEqual(['comment:/* brand */', 'property:--faber-ui-color-primary']);
  });

  it('SHOULD mark trailing comments WHEN the language is bash', () => {
    expect(kindsOf('bun run storybook  # port 6006', 'bash')).toEqual(['comment:# port 6006']);
  });
});
