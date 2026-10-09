'use client';

import { ColorSwatch, RadioCard, RadioGroup } from '@faber-ui/react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import { useSitePreferences } from '@/hooks/use-site-preferences';
import { createMaterialSnippet, getMaterial, MATERIALS } from '@/site/materials';

import { MaterialList, RecastColumn, RecastGrid, RecastNote } from './recast-panel.styles';
import { Specimen } from './specimen.ui';

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
        <RadioGroup label="Material">
          <MaterialList>
            {MATERIALS.map((option) => (
              <RadioCard
                key={option.id}
                name="site-material"
                value={option.id}
                label={option.name}
                checked={option.id === materialId}
                media={
                  <ColorSwatch
                    color={`linear-gradient(135deg, ${option[scheme].PRIMARY} 50%, ${option[scheme].ACCENT} 50%)`}
                  />
                }
                onChange={() => {
                  setMaterial(option.id);
                }}
              />
            ))}
          </MaterialList>
        </RadioGroup>

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
