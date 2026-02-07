// global-setup.ts
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

import { chromium, FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const baseURL = config.projects[0].use.baseURL;
  await page.goto(`${baseURL}`);
  await page.fill("//input[@id='user-name']", 'standard_user');
  await page.fill("//input[@id='password']", 'secret_sauce');
  await page.click("//input[@id='login-button']");
  await delay(2000);
  await page.context().storageState({ path: `session/login-state.json` });
}
export default globalSetup;
