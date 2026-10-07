import type { Metadata } from 'next';

import { CompositionPage } from '@/components/composition-page/composition-page.ui';

export const metadata: Metadata = {
  title: 'Composition',
  description:
    'Assemble your own components from Faber UI parts, and adjust the built-in ones through props, tokens, and part class names.',
};

export default function Page() {
  return <CompositionPage />;
}
