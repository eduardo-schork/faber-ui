'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState, type PropsWithChildren } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({ children }: PropsWithChildren) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();

    styleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return <StyleSheetManager sheet={styleSheet.instance}>{children}</StyleSheetManager>;
}
