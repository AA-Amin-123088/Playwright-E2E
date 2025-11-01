import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';

export async function customMethod(page:Page) {
  await page.locator("//div[normalize-space()='Sauce Labs Onesie']").click();
}
export async function clearInput(textField: Locator) {
  await textField.click();
  await textField.press('Control+A');
  await textField.press('Backspace');
}
