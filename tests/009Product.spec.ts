import { test,expect } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Playwright Session Example', () => {

  test.beforeEach(async( {page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await delay(2000);
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });

  test('Test Case 1: Verify Feature Items', async ({ page }) => {
    const isVisible = await page.locator("xpath=//div[normalize-space()='Sauce Labs Backpack']").isVisible();
    expect(isVisible).toBe(true);
    await delay(2000);
  });
  
  test('Test Case 2: Scroll to Bottom', async ({ page }) => {
    const backpack = page.locator("xpath=//div[normalize-space()='Sauce Labs Backpack']");
    await backpack.scrollIntoViewIfNeeded();
    await backpack.click();
    await delay(2000);
  });

});
