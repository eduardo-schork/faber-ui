'use client';

import { Avatar, AVATAR_SIZES } from '@faber-ui/react';
import { DemoNote, DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

// A small inline portrait, so the example needs no network request.
const PORTRAIT_SOURCE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23c9d3d8'/%3E%3Ccircle cx='24' cy='19' r='8' fill='%235b6b73'/%3E%3Cpath d='M8 48c0-10 7-17 16-17s16 7 16 17z' fill='%235b6b73'/%3E%3C/svg%3E";

// An undecodable image: it fires the error event without touching the network.
const BROKEN_SOURCE = 'data:image/png;base64,AAAA';

function AvatarDemo() {
  return (
    <DemoRow>
      <Avatar alt="Ada Lovelace" fallback="AL" size={AVATAR_SIZES.SMALL} />
      <Avatar alt="Ada Lovelace" fallback="AL" />
      <Avatar alt="Ada Lovelace" fallback="AL" size={AVATAR_SIZES.LARGE} />
      <Avatar alt="Grace Hopper" fallback="GH" src={PORTRAIT_SOURCE} size={AVATAR_SIZES.LARGE} />
      <Avatar alt="Alan Turing" fallback="AT" src={BROKEN_SOURCE} size={AVATAR_SIZES.LARGE} />
      <DemoNote>The last source cannot be decoded, so its fallback renders.</DemoNote>
    </DemoRow>
  );
}

export const AVATAR_DEMO = {
  Demo: AvatarDemo,
  code: `import { Avatar } from '@faber-ui/react/avatar';

<Avatar alt="Ada Lovelace" fallback="AL" />
<Avatar alt="Grace Hopper" fallback="GH" src="/people/grace.jpg" size="large" />

// A failed image falls back on its own.
<Avatar alt="Alan Turing" fallback="AT" src={brokenUrl} onImageError={report} />`,
} satisfies TComponentDemo;
