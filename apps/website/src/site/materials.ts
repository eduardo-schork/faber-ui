import {
  DARK_THEME,
  LIGHT_THEME,
  PALETTE,
  THEME_VARIABLE_NAMES,
  type TTheme,
  type TThemeTokenName,
} from '@faber-ui/react';

import { PREFERENCE_ATTRIBUTES } from './site.constants';

const MATERIAL_ROLES = [
  'PRIMARY',
  'PRIMARY_HOVER',
  'PRIMARY_ACTIVE',
  'ON_PRIMARY',
  'ACCENT',
  'ACCENT_HOVER',
  'ACCENT_ACTIVE',
  'ON_ACCENT',
  'FOCUS_RING',
] as const satisfies readonly TThemeTokenName[];

type TMaterialRole = (typeof MATERIAL_ROLES)[number];

export type TMaterialOverrides = Readonly<Pick<TTheme, TMaterialRole>>;

export type TMaterial = {
  readonly dark: TMaterialOverrides;
  readonly id: string;
  readonly light: TMaterialOverrides;
  readonly name: string;
};

export type TColorScheme = 'dark' | 'light';

const pickMaterialRoles = (theme: TTheme): TMaterialOverrides =>
  Object.fromEntries(MATERIAL_ROLES.map((role) => [role, theme[role]])) as TMaterialOverrides;

export const DEFAULT_MATERIAL_ID = 'malachite';

export const MATERIALS = [
  {
    id: DEFAULT_MATERIAL_ID,
    name: 'Malachite & Copper',
    light: pickMaterialRoles(LIGHT_THEME),
    dark: pickMaterialRoles(DARK_THEME),
  },
  {
    id: 'cobalt',
    name: 'Cobalt & Amber',
    light: {
      PRIMARY: 'hsl(222 68% 42%)',
      PRIMARY_HOVER: 'hsl(222 70% 34%)',
      PRIMARY_ACTIVE: 'hsl(222 74% 26%)',
      ON_PRIMARY: PALETTE.WHITE,
      ACCENT: 'hsl(30 92% 33%)',
      ACCENT_HOVER: 'hsl(29 94% 27%)',
      ACCENT_ACTIVE: 'hsl(28 96% 21%)',
      ON_ACCENT: PALETTE.WHITE,
      FOCUS_RING: 'hsl(30 92% 33%)',
    },
    dark: {
      PRIMARY: 'hsl(220 90% 74%)',
      PRIMARY_HOVER: 'hsl(220 84% 66%)',
      PRIMARY_ACTIVE: 'hsl(220 76% 58%)',
      ON_PRIMARY: PALETTE.NEUTRAL_950,
      ACCENT: 'hsl(40 96% 62%)',
      ACCENT_HOVER: 'hsl(38 92% 54%)',
      ACCENT_ACTIVE: 'hsl(36 88% 46%)',
      ON_ACCENT: PALETTE.NEUTRAL_950,
      FOCUS_RING: 'hsl(40 96% 62%)',
    },
  },
  {
    id: 'amethyst',
    name: 'Amethyst & Brass',
    light: {
      PRIMARY: 'hsl(268 48% 44%)',
      PRIMARY_HOVER: 'hsl(268 52% 36%)',
      PRIMARY_ACTIVE: 'hsl(268 56% 28%)',
      ON_PRIMARY: PALETTE.WHITE,
      ACCENT: 'hsl(44 80% 28%)',
      ACCENT_HOVER: 'hsl(44 84% 22%)',
      ACCENT_ACTIVE: 'hsl(44 88% 17%)',
      ON_ACCENT: PALETTE.WHITE,
      FOCUS_RING: 'hsl(44 80% 28%)',
    },
    dark: {
      PRIMARY: 'hsl(268 86% 78%)',
      PRIMARY_HOVER: 'hsl(268 78% 70%)',
      PRIMARY_ACTIVE: 'hsl(268 68% 62%)',
      ON_PRIMARY: PALETTE.NEUTRAL_950,
      ACCENT: 'hsl(46 88% 62%)',
      ACCENT_HOVER: 'hsl(45 82% 54%)',
      ACCENT_ACTIVE: 'hsl(44 76% 46%)',
      ON_ACCENT: PALETTE.NEUTRAL_950,
      FOCUS_RING: 'hsl(46 88% 62%)',
    },
  },
  {
    id: 'graphite',
    name: 'Graphite & Vermilion',
    light: {
      PRIMARY: 'hsl(200 15% 18%)',
      PRIMARY_HOVER: 'hsl(200 16% 11%)',
      PRIMARY_ACTIVE: 'hsl(200 18% 5%)',
      ON_PRIMARY: PALETTE.WHITE,
      ACCENT: 'hsl(8 78% 44%)',
      ACCENT_HOVER: 'hsl(8 80% 36%)',
      ACCENT_ACTIVE: 'hsl(8 84% 28%)',
      ON_ACCENT: PALETTE.WHITE,
      FOCUS_RING: 'hsl(8 78% 44%)',
    },
    dark: {
      PRIMARY: 'hsl(200 14% 92%)',
      PRIMARY_HOVER: 'hsl(200 12% 82%)',
      PRIMARY_ACTIVE: 'hsl(200 10% 72%)',
      ON_PRIMARY: PALETTE.NEUTRAL_950,
      ACCENT: 'hsl(10 100% 72%)',
      ACCENT_HOVER: 'hsl(9 92% 64%)',
      ACCENT_ACTIVE: 'hsl(8 82% 56%)',
      ON_ACCENT: PALETTE.NEUTRAL_950,
      FOCUS_RING: 'hsl(10 100% 72%)',
    },
  },
] as const satisfies readonly TMaterial[];

export type TMaterialId = (typeof MATERIALS)[number]['id'];

export const isMaterialId = (value: string | null): value is TMaterialId =>
  MATERIALS.some(({ id }) => id === value);

export const getMaterial = (materialId: TMaterialId): TMaterial =>
  MATERIALS.find(({ id }) => id === materialId) ?? MATERIALS[0];

const createDeclarations = (overrides: TMaterialOverrides, indentation: string) =>
  MATERIAL_ROLES.map(
    (role) => `${indentation}${THEME_VARIABLE_NAMES[role]}: ${overrides[role]};`,
  ).join('\n');

/** The override a consuming application would write to adopt a material. */
export const createMaterialSnippet = (material: TMaterial) =>
  material.id === DEFAULT_MATERIAL_ID
    ? '/* The default theme. Nothing to override. */'
    : [
        ':root {',
        createDeclarations(material.light, '  '),
        '}',
        '',
        "[data-theme='dark'] {",
        createDeclarations(material.dark, '  '),
        '}',
      ].join('\n');

/** The rules this website installs so a stored material applies before first paint. */
export const createMaterialStylesheet = () =>
  MATERIALS.filter(({ id }) => id !== DEFAULT_MATERIAL_ID)
    .map(({ dark, id, light }) => {
      const root = `:root[${PREFERENCE_ATTRIBUTES.MATERIAL}='${id}']`;

      return [
        `${root} {\n${createDeclarations(light, '  ')}\n}`,
        `${root}[${PREFERENCE_ATTRIBUTES.THEME}='dark'] {\n${createDeclarations(dark, '  ')}\n}`,
        `@media (prefers-color-scheme: dark) {\n  ${root}[${PREFERENCE_ATTRIBUTES.THEME}='system'] {\n${createDeclarations(dark, '    ')}\n  }\n}`,
      ].join('\n\n');
    })
    .join('\n\n');
