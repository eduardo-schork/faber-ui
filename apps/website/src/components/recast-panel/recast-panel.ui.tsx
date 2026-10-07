'use client';

import type { CSSProperties } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import { useSitePreferences } from '@/hooks/use-site-preferences';
import { createMaterialSnippet, getMaterial, MATERIALS } from '@/site/materials';

import {
  MaterialButton,
  MaterialList,
  MaterialSwatch,
  RecastColumn,
  RecastGrid,
  RecastNote,
} from './recast-panel.styles';
import { Specimen } from './specimen.ui';

type TSwatchStyle = CSSProperties & {
  readonly '--swatch-accent': string;
  readonly '--swatch-primary': string;
};

/**
 * Re-themes the whole website by switching a `data-material` attribute on the document element.
 * The stylesheet shown is generated from the same data that produces the rules in effect.
 */
export function RecastPanel() {
  const { materialId, scheme, setMaterial } = useSitePreferences();
  const material = getMaterial(materialId);

  return (
    <RecastGrid>
      <RecastColumn>
        <MaterialList role="group" aria-label="Material">
          {MATERIALS.map((option) => {
            const swatchStyle: TSwatchStyle = {
              '--swatch-accent': option[scheme].ACCENT,
              '--swatch-primary': option[scheme].PRIMARY,
            };

            return (
              <MaterialButton
                key={option.id}
                type="button"
                aria-pressed={option.id === materialId}
                onClick={() => {
                  setMaterial(option.id);
                }}
              >
                <MaterialSwatch aria-hidden="true" style={swatchStyle} />
                {option.name}
              </MaterialButton>
            );
          })}
        </MaterialList>

        <CodeBlock
          code={createMaterialSnippet(material)}
          label="theme-overrides.css"
          language="css"
        />

        <RecastNote>
          Nine custom properties per color scheme. No rebuild, no provider, and no component
          receives a new prop. The choice is stored and applied before first paint, so it survives a
          reload.
        </RecastNote>
      </RecastColumn>

      <Specimen />
    </RecastGrid>
  );
}
