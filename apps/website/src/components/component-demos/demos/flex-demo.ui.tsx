'use client';

import { COLORS, Flex, FLEX_ALIGNS, FLEX_DIRECTIONS, HFlex, Switch, VFlex } from '@faber-ui/react';
import { useState } from 'react';
import { DemoBox, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function FlexDemo() {
  const [outlined, setOutlined] = useState(true);
  const outlineColor = outlined ? COLORS.ACCENT : undefined;

  return (
    <DemoStack>
      <Flex
        align={{ MOBILE: FLEX_ALIGNS.STRETCH, TABLET: FLEX_ALIGNS.CENTER }}
        direction={{ MOBILE: FLEX_DIRECTIONS.COLUMN, TABLET: FLEX_DIRECTIONS.ROW }}
        gap={{ MOBILE: 'XS', TABLET: 'LG' }}
        outlineColor={outlineColor}
      >
        <DemoBox>Column below 768px</DemoBox>
        <DemoBox>Row above it</DemoBox>
        <DemoBox>gap: XS, then LG</DemoBox>
      </Flex>
      <HFlex gap="XS" outlineColor={outlineColor}>
        <DemoBox>HFlex</DemoBox>
        <DemoBox>always a row</DemoBox>
      </HFlex>
      <VFlex gap="XS" outlineColor={outlineColor}>
        <DemoBox>VFlex</DemoBox>
        <DemoBox>always a column</DemoBox>
      </VFlex>
      <Switch
        label="Show outlines"
        name="flex-outlines"
        checked={outlined}
        onChange={(event) => {
          setOutlined(event.target.checked);
        }}
      />
    </DemoStack>
  );
}

export const FLEX_DEMO = {
  Demo: FlexDemo,
  code: `import { COLORS, Flex, HFlex, VFlex } from '@faber-ui/react';

<Flex
  direction={{ MOBILE: 'column', TABLET: 'row' }}
  gap={{ MOBILE: 'XS', TABLET: 'LG' }}
  outlineColor={COLORS.ACCENT}
>
  <Summary />
  <Actions />
</Flex>

<HFlex gap="XS">Always a row</HFlex>
<VFlex gap="XS">Always a column</VFlex>`,
} satisfies TComponentDemo;
