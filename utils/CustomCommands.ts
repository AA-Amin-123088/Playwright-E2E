import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';

export async function customMethod(page:Page) {
  await page.locator("//div[normalize-space()='Sauce Labs Onesie']").click();
}
export async function clearAndTypeInput(inputField: Locator,value:string) {
  await inputField.click();
  await inputField.press('Control+A');
  await inputField.press('Backspace');
  await inputField.fill(value);
}
