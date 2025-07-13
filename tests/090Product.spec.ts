// tests/sauce-demo.spec.ts
import { test, expect } from '@playwright/test';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Sauce Demo Tests with Session', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // Already logged in
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });

  test('Test Case 1: Verify Feature Items', async ({ page }) => {
    await page.locator("//span[normalize-space()='My Info']").click();
    await delay(5000);
  });

  test('Test Case 2: Scroll to Bottom', async ({ page }) => {
    await page.locator("//span[normalize-space()='Maintenance']").click();
    await delay(2000);
  });

});
// update
// update
