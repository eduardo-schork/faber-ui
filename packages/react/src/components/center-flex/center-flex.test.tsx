import { cleanup, render } from '@testing-library/react';
import { BORDER_WIDTHS, COLORS, SPACINGS } from '@faber-ui/tokens';
import { createRef, type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { CenterFlex } from './center-flex.ui';

const renderStyles = (node: ReactNode) => {
  const styleSheet = new ServerStyleSheet();

  try {
    renderToString(styleSheet.collectStyles(node));

    return styleSheet.getStyleTags();
  } finally {
    styleSheet.seal();
  }
};

describe('CenterFlex', () => {
  afterEach(cleanup);

  it('SHOULD center content on both flex axes', () => {
    const styles = renderStyles(<CenterFlex />);

    expect(styles).toContain('flex-direction:row');
    expect(styles).toContain('align-items:center');
    expect(styles).toContain('justify-content:center');
  });

  it('SHOULD inherit token-aware gap and outline props from Flex', () => {
    const { getByTestId } = render(
      <CenterFlex data-testid="center" gap="MD" outlineColor={COLORS.ACCENT} />,
    );
    const styles = renderStyles(<CenterFlex gap="MD" outlineColor={COLORS.ACCENT} />);
    const center = getByTestId('center');

    expect(styles).toContain(`gap:${SPACINGS.MD}`);
    expect(styles).toContain(
      `outline:${BORDER_WIDTHS.DEFAULT} dashed var(--faber-ui-flex-outline-color)`,
    );
    expect(center.style.getPropertyValue('--faber-ui-flex-outline-color')).toBe(COLORS.ACCENT);
  });

  it('SHOULD forward native props and the ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <CenterFlex ref={ref} data-testid="center">
        Content
      </CenterFlex>,
    );

    expect(getByTestId('center').hasAttribute('data-center-flex')).toBe(true);
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('SHOULD support semantic element overrides', () => {
    const { getByRole } = render(<CenterFlex as="section" aria-label="Centered content" />);

    expect(getByRole('region', { name: 'Centered content' }).tagName).toBe('SECTION');
  });
});
