export type TCodeLanguage = 'bash' | 'css' | 'html' | 'tsx';

export type TCodeTokenKind =
  'comment' | 'keyword' | 'number' | 'operator' | 'plain' | 'property' | 'string' | 'tag';

export type TCodeToken = {
  readonly kind: TCodeTokenKind;
  readonly text: string;
};

type TTokenRule = readonly [kind: TCodeTokenKind, pattern: string];

const STRING_PATTERN = [
  String.raw`'(?:\\.|[^'\\\n])*'`,
  String.raw`"(?:\\.|[^"\\\n])*"`,
  '`(?:\\\\.|[^`\\\\])*`',
].join('|');

// Rules are tried in order at each position, so earlier rules win. This is a deliberately small
// highlighter for the short snippets on this site, not a parser.
const LANGUAGE_RULES: Readonly<Record<TCodeLanguage, readonly TTokenRule[]>> = {
  bash: [
    ['comment', String.raw`#[^\n]*`],
    ['string', STRING_PATTERN],
  ],
  css: [
    ['comment', String.raw`\/\*[\s\S]*?\*\/`],
    ['string', STRING_PATTERN],
    ['property', String.raw`--[\w-]+`],
    ['keyword', String.raw`@[\w-]+`],
  ],
  html: [
    ['comment', String.raw`<!--[\s\S]*?-->`],
    ['string', STRING_PATTERN],
    ['tag', String.raw`<\/?[A-Za-z][\w.-]*|\/?>`],
  ],
  tsx: [
    ['comment', String.raw`\/\/[^\n]*|\/\*[\s\S]*?\*\/`],
    ['string', STRING_PATTERN],
    ['operator', '=>'],
    ['tag', String.raw`<\/?[A-Za-z][\w.]*|\/?>`],
    [
      'keyword',
      String.raw`\b(?:const|export|function|import|return|satisfies)\b|\bfrom(?=\s+['"])|\bas(?=\s+const\b)|\btype(?=\s+[A-Z{])|\bdefault(?=\s+function\b)`,
    ],
    ['number', String.raw`\b\d+(?:\.\d+)?\b`],
  ],
};

const createLanguagePattern = (rules: readonly TTokenRule[]) =>
  new RegExp(rules.map(([kind, pattern]) => `(?<${kind}>${pattern})`).join('|'), 'gu');

const LANGUAGE_PATTERNS: Readonly<Record<TCodeLanguage, RegExp>> = {
  bash: createLanguagePattern(LANGUAGE_RULES.bash),
  css: createLanguagePattern(LANGUAGE_RULES.css),
  html: createLanguagePattern(LANGUAGE_RULES.html),
  tsx: createLanguagePattern(LANGUAGE_RULES.tsx),
};

const appendToken = (tokens: TCodeToken[], kind: TCodeTokenKind, text: string) => {
  const previous = tokens.at(-1);

  if (text === '') {
    return;
  }

  if (previous?.kind === kind) {
    tokens[tokens.length - 1] = { kind, text: previous.text + text };

    return;
  }

  tokens.push({ kind, text });
};

export function tokenizeCode(code: string, language: TCodeLanguage): TCodeToken[] {
  const tokens: TCodeToken[] = [];
  let cursor = 0;

  for (const match of code.matchAll(LANGUAGE_PATTERNS[language])) {
    const matchedRule = LANGUAGE_RULES[language].find(
      ([kind]) => match.groups?.[kind] !== undefined,
    );

    appendToken(tokens, 'plain', code.slice(cursor, match.index));
    appendToken(tokens, matchedRule?.[0] ?? 'plain', match[0]);
    cursor = match.index + match[0].length;
  }

  appendToken(tokens, 'plain', code.slice(cursor));

  return tokens;
}
