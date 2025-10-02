// global-setup.ts


import { chromium, FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill("//input[@id='user-name']", 'standard_user');
  await page.fill("//input[@id='password']", 'secret_sauce');
  await page.click("//input[@id='login-button']");
  await page.context().storageState({ path: 'auth.json' });
}
export default globalSetup;
