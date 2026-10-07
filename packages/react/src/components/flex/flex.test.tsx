import { cleanup, fireEvent, render } from '@testing-library/react';
import { BORDER_WIDTHS, COLORS, SPACINGS } from '@faber-ui/tokens';
import { createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { FLEX_DIRECTIONS } from './flex.constants';
import { Flex, HFlex, VFlex } from './flex.ui';

const renderStyles = (node: React.ReactNode) => {
  const styleSheet = new ServerStyleSheet();

  try {
    renderToString(styleSheet.collectStyles(node));

    return styleSheet.getStyleTags();
  } finally {
    styleSheet.seal();
  }
};

describe('Flex', () => {
  afterEach(cleanup);

  it('SHOULD render a horizontal block flex container by default', () => {
    const { getByTestId } = render(<Flex data-testid="layout">Content</Flex>);
    const layout = getByTestId('layout');

    expect(layout.tagName).toBe('DIV');
    expect(layout.hasAttribute('data-flex')).toBe(true);
    expect(layout.hasAttribute('data-inline')).toBe(false);
    expect(renderStyles(<Flex />)).toContain('flex-direction:row');
  });

  it('SHOULD forward native props, events, and the div ref', () => {
    const handleClick = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Flex ref={ref} data-testid="layout" aria-label="Interactive layout" onClick={handleClick} />,
    );

    fireEvent.click(getByTestId('layout'));

    expect(handleClick).toHaveBeenCalledOnce();
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('SHOULD support semantic element overrides', () => {
    const { getByRole } = render(<Flex as="section" aria-label="Details" />);

    expect(getByRole('region', { name: 'Details' }).tagName).toBe('SECTION');
  });

  it('SHOULD accept spacing token names and values', () => {
    const tokenNameStyles = renderStyles(<Flex gap="MD" />);
    const tokenValueStyles = renderStyles(<Flex gap={SPACINGS.LG} />);

    expect(tokenNameStyles).toContain(`gap:${SPACINGS.MD}`);
    expect(tokenValueStyles).toContain(`gap:${SPACINGS.LG}`);
  });

  it('SHOULD create mobile-first responsive styles from breakpoint tokens', () => {
    const styles = renderStyles(
      <Flex
        direction={{ MOBILE: FLEX_DIRECTIONS.COLUMN, TABLET: FLEX_DIRECTIONS.ROW }}
        gap={{ MOBILE: 'SM', DESKTOP: 'LG' }}
      />,
    );

    expect(styles).toContain(`flex-direction:${FLEX_DIRECTIONS.COLUMN}`);
    expect(styles).toContain('@media (min-width: 768px)');
    expect(styles).toContain(`flex-direction:${FLEX_DIRECTIONS.ROW}`);
    expect(styles).toContain('@media (min-width: 1024px)');
    expect(styles).toContain(`gap:${SPACINGS.LG}`);
  });

  it('SHOULD render a tokenized dashed outline without forwarding its prop', () => {
    const { getByTestId } = render(
      <Flex data-testid="layout" outlineColor={COLORS.ACCENT}>
        Content
      </Flex>,
    );
    const styles = renderStyles(<Flex outlineColor={COLORS.ACCENT} />);
    const layout = getByTestId('layout');

    expect(layout.hasAttribute('outlineColor')).toBe(false);
    expect(layout.hasAttribute('data-outline-color')).toBe(true);
    expect(layout.style.getPropertyValue('--faber-ui-flex-outline-color')).toBe(COLORS.ACCENT);
    expect(styles).toContain(
      `outline:${BORDER_WIDTHS.DEFAULT} dashed var(--faber-ui-flex-outline-color)`,
    );
  });

  it('SHOULD provide fixed horizontal and vertical presets', () => {
    expect(renderStyles(<HFlex />)).toContain(`flex-direction:${FLEX_DIRECTIONS.ROW}`);
    expect(renderStyles(<VFlex />)).toContain(`flex-direction:${FLEX_DIRECTIONS.COLUMN}`);
  });

  it('SHOULD support inline flex rendering', () => {
    const { getByTestId } = render(<Flex inline data-testid="layout" />);

    expect(getByTestId('layout').getAttribute('data-inline')).toBe('true');
    expect(renderStyles(<Flex inline />)).toContain('display:inline-flex');
  });
});
