import { cleanup, render } from '@testing-library/react';
import { BORDER_WIDTHS, COLORS, CONTAINER_SIZES, SPACINGS } from '@faber-ui/tokens';
import { createRef, type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import styled, { ServerStyleSheet } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { Container } from './container.ui';

const ConsumerContainer = styled(Container).attrs({
  center: true,
})``;

const renderStyles = (node: ReactNode) => {
  const styleSheet = new ServerStyleSheet();

  try {
    renderToString(styleSheet.collectStyles(node));

    return styleSheet.getStyleTags();
  } finally {
    styleSheet.seal();
  }
};

describe('Container', () => {
  afterEach(cleanup);

  it('SHOULD render the responsive page width scale by default', () => {
    const styles = renderStyles(<Container />);

    expect(styles).toContain(`padding-inline:${SPACINGS.MD}`);
    expect(styles).toContain('@media (min-width: 768px)');
    expect(styles).toContain(`min-width:${CONTAINER_SIZES.SMALL}`);
    expect(styles).toContain(`max-width:${CONTAINER_SIZES.MEDIUM}`);
    expect(styles).toContain(`min-width:${CONTAINER_SIZES.LARGE}`);
    expect(styles).toContain(`max-width:${CONTAINER_SIZES.WIDE}`);
  });

  it('SHOULD center itself only WHEN requested', () => {
    const { getByTestId, rerender } = render(<Container data-testid="container" />);
    const styles = renderStyles(<Container />);

    expect(getByTestId('container').hasAttribute('data-center')).toBe(false);
    expect(styles).toContain("[data-center='true']");
    expect(styles).toContain('margin-inline:auto');

    rerender(<Container center data-testid="container" />);

    expect(getByTestId('container').getAttribute('data-center')).toBe('true');
  });

  it('SHOULD resolve a named size as a responsive maximum', () => {
    const { getByTestId } = render(<Container data-testid="container" size="MEDIUM" />);
    const container = getByTestId('container');

    expect(container.hasAttribute('data-custom-size')).toBe(true);
    expect(container.style.getPropertyValue('--faber-ui-container-max-width')).toBe(
      CONTAINER_SIZES.MEDIUM,
    );
  });

  it('SHOULD accept an arbitrary CSS maximum width', () => {
    const { getByTestId } = render(
      <Container data-testid="container" size="1080px" style={{ color: 'inherit' }} />,
    );
    const container = getByTestId('container');

    expect(container.style.getPropertyValue('--faber-ui-container-max-width')).toBe('1080px');
    expect(container.style.color).toBe('inherit');
  });

  it('SHOULD inherit token-aware layout and outline props from VFlex', () => {
    const { getByTestId } = render(
      <Container data-testid="container" gap="MD" outlineColor={COLORS.ACCENT} size="MEDIUM" />,
    );
    const styles = renderStyles(<Container gap="MD" outlineColor={COLORS.ACCENT} size="MEDIUM" />);
    const container = getByTestId('container');

    expect(styles).toContain('flex-direction:column');
    expect(styles).toContain(`gap:${SPACINGS.MD}`);
    expect(styles).toContain(
      `outline:${BORDER_WIDTHS.DEFAULT} dashed var(--faber-ui-flex-outline-color)`,
    );
    expect(container.style.getPropertyValue('--faber-ui-flex-outline-color')).toBe(COLORS.ACCENT);
  });

  it('SHOULD forward native props, semantic overrides, and the ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByRole } = render(
      <Container ref={ref} as="main" aria-label="Page content">
        Content
      </Container>,
    );

    expect(getByRole('main', { name: 'Page content' }).tagName).toBe('MAIN');
    expect(ref.current?.tagName).toBe('MAIN');
  });

  it('SHOULD not forward component styling props to the DOM', () => {
    const { getByTestId } = render(<Container center data-testid="container" size="MEDIUM" />);
    const container = getByTestId('container');

    expect(container.hasAttribute('size')).toBe(false);
    expect(container.hasAttribute('center')).toBe(false);
  });

  it('SHOULD preserve DOM safety WHEN composed with styled-components', () => {
    const { getByRole } = render(
      <ConsumerContainer forwardedAs="main" aria-label="Styled page content" />,
    );
    const container = getByRole('main', { name: 'Styled page content' });

    expect(container.getAttribute('data-center')).toBe('true');
    expect(container.hasAttribute('center')).toBe(false);
  });
});
