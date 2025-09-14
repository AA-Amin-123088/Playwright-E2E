// tests/sauce-demo.spec.ts
import { test, expect } from '@playwright/test';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Sauce Demo Tests with Session', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });

  test('Test Case 1: Verify Feature Items', async ({ page }) => {
    await page.locator("//div[normalize-space()='Sauce Labs Fleece Jacket']").click();
    await delay(5000);
  });

  test('Test Case 2: Scroll to Bottom', async ({ page }) => {
    await page.locator("//div[normalize-space()='Sauce Labs Onesie']").click();
    await delay(5000);
  });

});
// update
// update

