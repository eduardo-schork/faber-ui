import { expect, test } from '@playwright/test';

import { expectFocusWithin, expectInsideViewport, openStory } from './story';

test.describe('Dialog', () => {
  test('SHOULD move focus into the dialog WHEN it opens', async ({ page }) => {
    await openStory(page, 'components-overlays-dialog--playground');
    await page.getByRole('button', { name: 'Open dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Delete project' });

    await expect(dialog).toBeVisible();
    await expectFocusWithin(dialog);
    await expectInsideViewport(page, dialog);
  });

  test('SHOULD keep focus inside the dialog WHEN Tab is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-dialog--playground');
    await page.getByRole('button', { name: 'Open dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Delete project' });

    await expect(dialog).toBeVisible();

    for (const key of ['Tab', 'Tab', 'Tab', 'Shift+Tab']) {
      await page.keyboard.press(key);
      await expect(page.getByRole('button', { name: 'Open dialog' })).not.toBeFocused();
    }
  });

  test('SHOULD close and return focus to the trigger WHEN Escape is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-dialog--playground');

    const trigger = page.getByRole('button', { name: 'Open dialog' });

    await trigger.click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('SHOULD block the page behind WHEN it is open', async ({ page }) => {
    await openStory(page, 'components-overlays-dialog--playground');

    const trigger = page.getByRole('button', { name: 'Open dialog' });
    const triggerBox = await trigger.boundingBox();

    await trigger.click();

    const dialog = page.getByRole('dialog', { name: 'Delete project' });

    await expect(dialog).toBeVisible();
    expect(await dialog.evaluate((element) => element.matches(':modal'))).toBe(true);

    // The scrim covers the trigger, so a click where it sits never reaches it.
    await page.mouse.click(
      (triggerBox?.x ?? 0) + (triggerBox?.width ?? 0) / 2,
      (triggerBox?.y ?? 0) + (triggerBox?.height ?? 0) / 2,
    );
    await expect(dialog).toBeVisible();
    await expectFocusWithin(dialog);
  });
});

test.describe('AlertDialog', () => {
  test('SHOULD open as an alert dialog with focus inside WHEN triggered', async ({ page }) => {
    await openStory(page, 'components-overlays-alertdialog--playground');
    await page.getByRole('button', { name: 'Delete project' }).click();

    const dialog = page.getByRole('alertdialog', { name: 'Delete this project?' });

    await expect(dialog).toBeVisible();
    await expectFocusWithin(dialog);
  });

  test('SHOULD close and return focus to the trigger WHEN cancelled', async ({ page }) => {
    await openStory(page, 'components-overlays-alertdialog--playground');

    const trigger = page.getByRole('button', { name: 'Delete project' });

    await trigger.click();
    await page.getByRole('button', { name: 'Cancel' }).click();

    await expect(page.getByRole('alertdialog')).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test.describe('Drawer', () => {
  test('SHOULD sit against the end edge at full height WHEN opened', async ({ page }) => {
    await openStory(page, 'components-overlays-drawer--playground');
    await page.getByRole('button', { name: 'Open drawer' }).click();

    const drawer = page.getByRole('dialog', { name: 'Filters' });

    await expect(drawer).toBeVisible();
    await expectFocusWithin(drawer);

    const viewport = page.viewportSize();

    await expect
      .poll(async () => {
        const box = await drawer.boundingBox();

        return box === null ? null : Math.round(box.x + box.width);
      })
      .toBe(viewport?.width ?? 0);
    expect((await drawer.boundingBox())?.height).toBe(viewport?.height);
  });

  test('SHOULD close and return focus to the trigger WHEN Escape is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-drawer--playground');

    const trigger = page.getByRole('button', { name: 'Open drawer' });

    await trigger.click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test.describe('Menu', () => {
  test('SHOULD open below the trigger inside the viewport WHEN clicked', async ({ page }) => {
    await openStory(page, 'components-overlays-menu--playground');

    const trigger = page.getByRole('button', { name: 'Options' });
    // Measured first: the open menu hides the rest of the page from the accessibility tree.
    const triggerBox = await trigger.boundingBox();

    await trigger.click();

    const menu = page.getByRole('menu');

    await expect(menu).toBeVisible();
    await expectInsideViewport(page, menu);

    const menuBox = await menu.boundingBox();

    expect(menuBox?.y).toBeGreaterThanOrEqual((triggerBox?.y ?? 0) + (triggerBox?.height ?? 0));
  });

  test('SHOULD skip the disabled item WHEN moving with the arrow keys', async ({ page }) => {
    await openStory(page, 'components-overlays-menu--playground');
    await page.getByRole('button', { name: 'Options' }).focus();
    await page.keyboard.press('Enter');

    await expect(page.getByRole('menuitem', { name: 'Rename' })).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menuitem', { name: 'Duplicate' })).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menuitem', { name: 'Delete' })).toBeFocused();
  });

  test('SHOULD close and return focus to the trigger WHEN Escape is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-menu--playground');

    const trigger = page.getByRole('button', { name: 'Options' });

    await trigger.click();
    await expect(page.getByRole('menu')).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(page.getByRole('menu')).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test.describe('Popover', () => {
  test('SHOULD open below the trigger with its label WHEN clicked', async ({ page }) => {
    await openStory(page, 'components-overlays-popover--playground');

    const trigger = page.getByRole('button', { name: 'Share' });

    await trigger.click();

    const popover = page.getByRole('dialog', { name: 'Share settings' });

    await expect(popover).toBeVisible();
    await expectInsideViewport(page, popover);

    const triggerBox = await trigger.boundingBox();
    const popoverBox = await popover.boundingBox();

    expect(popoverBox?.y).toBeGreaterThanOrEqual((triggerBox?.y ?? 0) + (triggerBox?.height ?? 0));
  });

  test('SHOULD close and return focus to the trigger WHEN Escape is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-popover--playground');

    const trigger = page.getByRole('button', { name: 'Share' });

    await trigger.click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('SHOULD close WHEN the page outside is clicked', async ({ page }) => {
    await openStory(page, 'components-overlays-popover--playground');
    await page.getByRole('button', { name: 'Share' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.mouse.click(5, 5);

    await expect(page.getByRole('dialog')).toBeHidden();
  });
});

test.describe('Tooltip', () => {
  test('SHOULD appear above the trigger WHEN it is hovered', async ({ page }) => {
    await openStory(page, 'components-overlays-tooltip--playground');

    const trigger = page.getByRole('button', { name: 'Hover or focus me' });

    await trigger.hover();

    const tooltip = page.getByRole('tooltip');

    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('Copies the link to the clipboard');
    await expect(trigger).toHaveAccessibleDescription('Copies the link to the clipboard');

    const triggerBox = await trigger.boundingBox();
    const tooltipBox = await page.locator('.faber-ui-tooltip-content').boundingBox();

    expect((tooltipBox?.y ?? 0) + (tooltipBox?.height ?? 0)).toBeLessThanOrEqual(
      triggerBox?.y ?? 0,
    );
  });

  test('SHOULD appear WHEN the trigger receives keyboard focus', async ({ page }) => {
    await openStory(page, 'components-overlays-tooltip--playground');
    await page.keyboard.press('Tab');

    await expect(page.getByRole('button', { name: 'Hover or focus me' })).toBeFocused();
    await expect(page.getByRole('tooltip')).toBeVisible();
  });

  test('SHOULD hide WHEN Escape is pressed', async ({ page }) => {
    await openStory(page, 'components-overlays-tooltip--playground');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(page.getByRole('tooltip')).toBeHidden();
  });
});
