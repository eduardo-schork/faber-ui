import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { ALERT_COLORS } from './alert.constants';
import { AlertBody, AlertTitle } from './alert.styles';
import { Alert, AlertRoot } from './alert.ui';

describe('Alert', () => {
  afterEach(cleanup);

  it('SHOULD render a static note with a title and body and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByRole } = render(
      <Alert ref={ref} title="Pre-release">
        The packages are not published yet.
      </Alert>,
    );
    const alert = getByRole('note');

    expect(alert.getAttribute('data-color')).toBe(ALERT_COLORS.NEUTRAL);
    expect(alert.querySelector('[data-alert-title]')?.textContent).toBe('Pre-release');
    expect(alert.querySelector('[data-alert-body]')?.textContent).toBe(
      'The packages are not published yet.',
    );
    expect(ref.current).toBe(alert);
  });

  it('SHOULD announce itself WHEN given a live role', () => {
    const { getByRole } = render(
      <Alert role="alert" color={ALERT_COLORS.ERROR}>
        The payment failed.
      </Alert>,
    );
    const alert = getByRole('alert');

    expect(alert.getAttribute('data-color')).toBe(ALERT_COLORS.ERROR);
    expect(alert.querySelector('[data-alert-title]')).toBeNull();
  });

  it('SHOULD forward native props without forwarding custom props', () => {
    const { getByRole } = render(
      <Alert className="consumer" color={ALERT_COLORS.ACCENT} title="Heads up" />,
    );
    const alert = getByRole('note');

    expect(alert.classList.contains('consumer')).toBe(true);
    expect(alert.hasAttribute('title')).toBe(false);
    expect(alert.hasAttribute('color')).toBe(false);
  });

  it('SHOULD let a consumer assemble an alert from its parts', () => {
    const { getByRole } = render(
      <AlertRoot color={ALERT_COLORS.PRIMARY}>
        <AlertBody>Body first</AlertBody>
        <AlertTitle>Then the title</AlertTitle>
      </AlertRoot>,
    );
    const alert = getByRole('note');

    expect(alert.getAttribute('data-color')).toBe(ALERT_COLORS.PRIMARY);
    expect(alert.firstElementChild?.classList.contains('faber-ui-alert-body')).toBe(true);
    expect(alert.lastElementChild?.classList.contains('faber-ui-alert-title')).toBe(true);
  });
});
