import { expect, test } from '@playwright/test';

import { expectInsideViewport, openStory } from './story';

test.describe('Listbox', () => {
  test('SHOULD select an option WHEN it is clicked', async ({ page }) => {
    await openStory(page, 'components-forms-listbox--playground');

    const trigger = page.getByRole('combobox', { name: 'Role' });

    await trigger.click();

    const list = page.getByRole('listbox');

    await expect(list).toBeVisible();
    await expectInsideViewport(page, list);
    await page.getByRole('option', { name: 'Editor' }).click();

    await expect(list).toBeHidden();
    await expect(trigger).toHaveText('Editor');
    await expect(trigger).toBeFocused();
  });

  test('SHOULD select an option WHEN chosen with the keyboard', async ({ page }) => {
    await openStory(page, 'components-forms-listbox--playground');

    const trigger = page.getByRole('combobox', { name: 'Role' });

    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('option', { name: 'Viewer' })).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('option', { name: 'Editor' })).toBeFocused();
    await page.keyboard.press('Enter');

    await expect(page.getByRole('listbox')).toBeHidden();
    await expect(trigger).toHaveText('Editor');
    await expect(trigger).toBeFocused();
  });

  test('SHOULD keep the value WHEN Escape closes the list', async ({ page }) => {
    await openStory(page, 'components-forms-listbox--selected');

    const trigger = page.getByRole('combobox', { name: 'Role' });

    await trigger.click();
    await expect(page.getByRole('listbox')).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Escape');

    await expect(page.getByRole('listbox')).toBeHidden();
    await expect(trigger).toHaveText('Editor');
  });

  test('SHOULD not open WHEN disabled', async ({ page }) => {
    await openStory(page, 'components-forms-listbox--disabled');

    const trigger = page.getByRole('combobox', { name: 'Role' });

    await expect(trigger).toBeDisabled();
    await trigger.click({ force: true });

    await expect(page.getByRole('listbox')).toBeHidden();
  });
});

test.describe('Combobox', () => {
  test('SHOULD filter the options WHEN the reader types', async ({ page }) => {
    await openStory(page, 'components-forms-combobox--playground');

    const input = page.getByRole('combobox', { name: 'Region' });

    await input.click();
    await expect(page.getByRole('option')).toHaveCount(6);
    await input.pressSequentially('lon');

    await expect(page.getByRole('option')).toHaveCount(1);
    await expect(page.getByRole('option', { name: 'London' })).toBeVisible();
    await expectInsideViewport(page, page.getByRole('listbox'));
  });

  test('SHOULD select the active option and keep focus on the input WHEN Enter is pressed', async ({
    page,
  }) => {
    await openStory(page, 'components-forms-combobox--playground');

    const input = page.getByRole('combobox', { name: 'Region' });

    await input.click();
    await input.pressSequentially('dub');
    await page.keyboard.press('Enter');

    await expect(page.getByRole('listbox')).toBeHidden();
    await expect(input).toHaveValue('Dublin');
    await expect(input).toBeFocused();
  });

  test('SHOULD skip the disabled option WHEN moving with the arrow keys', async ({ page }) => {
    await openStory(page, 'components-forms-combobox--playground');

    const input = page.getByRole('combobox', { name: 'Region' });

    await input.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('End');

    const activeId = await input.getAttribute('aria-activedescendant');

    expect(activeId).not.toBeNull();
    await expect(page.locator(`[id="${activeId ?? ''}"]`)).toHaveText('Virginia');
  });

  test('SHOULD select an option WHEN it is clicked', async ({ page }) => {
    await openStory(page, 'components-forms-combobox--playground');

    const input = page.getByRole('combobox', { name: 'Region' });

    await input.click();
    await page.getByRole('option', { name: 'São Paulo' }).click();

    await expect(input).toHaveValue('São Paulo');
  });

  test('SHOULD restore the selected label WHEN Escape discards the query', async ({ page }) => {
    await openStory(page, 'components-forms-combobox--selected');

    const input = page.getByRole('combobox', { name: 'Region' });

    await input.click();
    await input.fill('xyz');
    await page.keyboard.press('Escape');

    await expect(page.getByRole('listbox')).toBeHidden();
    await expect(input).toHaveValue('Dublin');
  });

  test('SHOULD remove the last value WHEN Backspace is pressed on an empty multiple input', async ({
    page,
  }) => {
    await openStory(page, 'components-forms-combobox--multiple');

    const input = page.getByRole('combobox', { name: 'Regions' });

    await expect(page.getByRole('button', { name: 'Remove São Paulo' })).toBeVisible();
    await input.focus();
    await page.keyboard.press('Backspace');

    await expect(page.getByRole('button', { name: 'Remove São Paulo' })).toBeHidden();
    await expect(page.getByRole('button', { name: 'Remove Frankfurt' })).toBeVisible();
  });
});

test.describe('Calendar', () => {
  test('SHOULD move focus by day and week WHEN the arrow keys are pressed', async ({ page }) => {
    await openStory(page, 'components-forms-calendar--playground');
    await page.locator('[data-date="2026-03-15"]').focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('[data-date="2026-03-16"]')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('[data-date="2026-03-23"]')).toBeFocused();
    await page.keyboard.press('Home');
    await expect(page.locator('[data-date="2026-03-22"]')).toBeFocused();
  });

  test('SHOULD follow focus into the next month WHEN it leaves the grid', async ({ page }) => {
    await openStory(page, 'components-forms-calendar--playground');
    await page.locator('[data-date="2026-03-15"]').focus();
    await page.keyboard.press('PageDown');

    await expect(page.getByText('April 2026')).toBeVisible();
    await expect(page.locator('[data-date="2026-04-15"]')).toBeFocused();
  });

  test('SHOULD keep one day in the tab order WHEN the month changes', async ({ page }) => {
    await openStory(page, 'components-forms-calendar--playground');
    await page.getByRole('button', { name: 'Next month' }).click();

    await expect(page.getByText('April 2026')).toBeVisible();
    await expect(page.locator('[data-date][tabindex="0"]')).toHaveCount(1);
  });

  test('SHOULD select a day WHEN it is clicked', async ({ page }) => {
    await openStory(page, 'components-forms-calendar--playground');
    await page.locator('[data-date="2026-03-20"]').click();

    await expect(page.locator('[data-date="2026-03-20"]')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-date="2026-03-15"]')).toHaveAttribute('aria-pressed', 'false');
  });

  test('SHOULD not move focus past the limit WHEN the range is limited', async ({ page }) => {
    await openStory(page, 'components-forms-calendar--limited-range');
    await page.locator('[data-date="2026-03-15"]').focus();

    for (let press = 0; press < 12; press += 1) {
      await page.keyboard.press('ArrowRight');
    }

    await expect(page.locator('[data-date="2026-03-24"]')).toBeFocused();
    await expect(page.locator('[data-date="2026-03-25"]')).toBeDisabled();
  });
});

test.describe('DatePicker', () => {
  test('SHOULD focus the selected day inside the viewport WHEN it opens', async ({ page }) => {
    await openStory(page, 'components-forms-datepicker--selected');
    await page.getByRole('button', { name: 'Start date' }).click();

    await expect(page.locator('[data-date="2026-03-15"]')).toBeFocused();
    await expectInsideViewport(page, page.getByRole('dialog'));
  });

  test('SHOULD show the date, close, and return focus WHEN a day is chosen', async ({ page }) => {
    await openStory(page, 'components-forms-datepicker--selected');

    const trigger = page.getByRole('button', { name: 'Start date' });

    await trigger.click();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');

    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toHaveText('Mar 16, 2026');
    await expect(trigger).toBeFocused();
  });

  test('SHOULD keep the value WHEN Escape closes the calendar', async ({ page }) => {
    await openStory(page, 'components-forms-datepicker--selected');

    const trigger = page.getByRole('button', { name: 'Start date' });

    await trigger.click();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Escape');

    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toHaveText('Mar 15, 2026');
    await expect(trigger).toBeFocused();
  });
});
