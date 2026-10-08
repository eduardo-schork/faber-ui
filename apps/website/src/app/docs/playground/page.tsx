import type { Metadata } from 'next';

import { MovedPage } from '@/components/moved-page/moved-page.ui';

export const metadata: Metadata = {
  title: 'Moved',
  robots: { index: false },
};

export default function Page() {
  return <MovedPage to="/docs/customization#classes" />;
}
