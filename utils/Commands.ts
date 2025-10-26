import { Page } from '@playwright/test';

export async function custom_method(page:Page) {
  await page.locator("//div[normalize-space()='Sauce Labs Onesie']").click();
}