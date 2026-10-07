export type TCSSCustomProperty = `--${string}`;

export function cssVariable<const Name extends TCSSCustomProperty>(name: Name): `var(${Name})`;
export function cssVariable<const Name extends TCSSCustomProperty, const Fallback extends string>(
  name: Name,
  fallback: Fallback,
): `var(${Name}, ${Fallback})`;
export function cssVariable(name: TCSSCustomProperty, fallback?: string): string {
  return fallback === undefined ? `var(${name})` : `var(${name}, ${fallback})`;
}
