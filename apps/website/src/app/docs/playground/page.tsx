import type { Metadata } from 'next';

import { PlaygroundPage } from '@/components/playground-page/playground-page.ui';

export const metadata: Metadata = {
  title: 'Playground',
  description:
    'Edit a stylesheet and watch Faber UI components change through CSS variables and part class names.',
};

export default function Page() {
  return <PlaygroundPage />;
}
