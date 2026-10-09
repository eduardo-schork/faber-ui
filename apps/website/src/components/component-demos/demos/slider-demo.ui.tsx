'use client';

import { Field, Slider } from '@faber-ui/react';
import { useState } from 'react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function SliderDemo() {
  const [volume, setVolume] = useState(40);

  return (
    <DemoStack>
      <Field label="Volume" description={`Currently ${String(volume)} of 100.`}>
        <Slider
          name="volume"
          min={0}
          max={100}
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </Field>
      <Field label="Unavailable">
        <Slider name="locked" defaultValue={70} disabled />
      </Field>
    </DemoStack>
  );
}

export const SLIDER_DEMO = {
  Demo: SliderDemo,
  code: `import { Field, Slider } from '@faber-ui/react';

<Field label="Volume">
  <Slider
    min={0}
    max={100}
    value={volume}
    onChange={(event) => setVolume(event.target.valueAsNumber)}
  />
</Field>`,
} satisfies TComponentDemo;
