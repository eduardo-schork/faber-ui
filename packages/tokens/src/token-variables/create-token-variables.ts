import { cssVariable } from '../css-variable';

export type TTokenScale = Readonly<Record<string, number | string>>;

export type TTokenVariableName<
  TPrefix extends string,
  TName extends string,
> = `--faber-ui-${TPrefix}-${Lowercase<TName>}`;

/** Maps every name in a scale to a CSS variable reference that falls back to the scale value. */
export type TTokenVariables<TPrefix extends string, TScale extends TTokenScale> = {
  readonly [
    TName in keyof TScale & string
  ]: `var(${TTokenVariableName<TPrefix, TName>}, ${TScale[TName]})`;
};

export const getTokenVariableName = <TPrefix extends string, TName extends string>(
  prefix: TPrefix,
  name: TName,
) => `--faber-ui-${prefix}-${name.toLowerCase()}` as TTokenVariableName<TPrefix, TName>;

/**
 * Turns a raw scale into the table components consume. Each entry resolves through a CSS custom
 * property, so an application can retune the scale from a stylesheet, and falls back to the raw
 * value when the property is not set.
 */
export const createTokenVariables = <TPrefix extends string, const TScale extends TTokenScale>(
  prefix: TPrefix,
  scale: TScale,
): TTokenVariables<TPrefix, TScale> =>
  Object.fromEntries(
    Object.entries(scale).map(([name, value]) => [
      name,
      cssVariable(getTokenVariableName(prefix, name), String(value)),
    ]),
  ) as TTokenVariables<TPrefix, TScale>;
