import type { Metadata } from 'next';

import { GettingStartedPage } from '@/components/getting-started-page/getting-started-page.ui';

export const metadata: Metadata = {
  title: 'Get started',
  description:
    'Install Faber UI, load the stylesheet, set up Next.js or Vite, and build a first validated form.',
};

export default function Page() {
  return <GettingStartedPage />;
}
