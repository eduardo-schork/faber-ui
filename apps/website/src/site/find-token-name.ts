type TTokenTable = Readonly<Record<string, number | string>>;

/** Finds the token whose value equals a measured CSS value, such as `40px` in `SIZES`. */
export const findTokenName = <TTokens extends TTokenTable>(
  tokens: TTokens,
  value: number | string,
): (keyof TTokens & string) | undefined =>
  Object.keys(tokens).find((name) => String(tokens[name]) === String(value));
