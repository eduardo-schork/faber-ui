import type { Metadata } from 'next';

import { ComponentsPage } from '@/components/components-page/components-page.ui';

export const metadata: Metadata = {
  title: 'Components',
  description:
    'Live examples of every Faber UI component, with the code that produces them and the native element each one renders.',
};

export default function Page() {
  return <ComponentsPage />;
}
