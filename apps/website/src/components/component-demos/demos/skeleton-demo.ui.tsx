'use client';

import {
  Avatar,
  AVATAR_SIZES,
  Skeleton,
  Switch,
  Text,
  TYPOGRAPHY_TONES,
  VFlex,
} from '@faber-ui/react';
import { useState } from 'react';
import { DemoMedia, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function SkeletonDemo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <DemoStack>
      <DemoMedia aria-busy={!loaded}>
        {loaded ? (
          <>
            <Avatar alt="" fallback="GH" size={AVATAR_SIZES.LARGE} />
            <VFlex>
              <Text.Strong>Grace Hopper</Text.Strong>
              <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>Compiler team · 12 reviews</Text.Small>
            </VFlex>
          </>
        ) : (
          <>
            <Skeleton circle />
            <VFlex gap="XXS">
              <Skeleton style={{ width: '45%' }} />
              <Skeleton style={{ width: '70%' }} />
            </VFlex>
          </>
        )}
      </DemoMedia>
      <Switch
        label="Content has loaded"
        name="skeleton-loaded"
        checked={loaded}
        onChange={(event) => {
          setLoaded(event.target.checked);
        }}
      />
    </DemoStack>
  );
}

export const SKELETON_DEMO = {
  Demo: SkeletonDemo,
  code: `import { Skeleton } from '@faber-ui/react/skeleton';

<section aria-busy={!loaded}>
  {loaded ? (
    <Profile />
  ) : (
    <>
      <Skeleton circle />
      <Skeleton style={{ width: '45%' }} />
    </>
  )}
</section>`,
} satisfies TComponentDemo;
