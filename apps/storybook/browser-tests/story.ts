import { expect, type Locator, type Page } from '@playwright/test';

/** Opens one story on its own, without the Storybook manager around it. */
export const openStory = async (page: Page, storyId: string) => {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  await expect(page.locator('body.sb-show-main')).toBeVisible();
  // The story mounts after the frame is shown; a key pressed before that goes nowhere.
  await expect(page.locator('#storybook-root > *').first()).toBeAttached();
};

/** Asserts that an element is drawn completely inside the viewport. */
export const expectInsideViewport = async (page: Page, locator: Locator) => {
  const box = await locator.boundingBox();
  const viewport = page.viewportSize();

  expect(box).not.toBeNull();
  expect(viewport).not.toBeNull();

  if (box === null || viewport === null) {
    return;
  }

  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.y).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
  expect(box.y + box.height).toBeLessThanOrEqual(viewport.height);
};

/** Asserts that keyboard focus is on the element or on something inside it. */
export const expectFocusWithin = async (locator: Locator) => {
  await expect
    .poll(() => locator.evaluate((element) => element.contains(document.activeElement)))
    .toBe(true);
};
