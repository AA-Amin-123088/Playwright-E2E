// global-setup.ts
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

import { chromium, FullConfig} from '@playwright/test';

import * as dotenv from 'dotenv';
import path from 'path';
// Get environment variable from CLI or default to dev
const ENV = process.env.ENV || 'dev';
// Load corresponding .env file
dotenv.config({ path: path.resolve(__dirname, `./env/${ENV}.env`) });

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // const baseURL = config.projects[0].use.baseURL; // Access baseURL from config
  await page.goto(`${process.env.BASE_URL}`);
  await page.fill("//input[@id='user-name']", `${process.env.USER}`);
  await page.fill("//input[@id='password']", `${process.env.PASS}`);
  await page.click("//input[@id='login-button']");
  await delay(2000);
  await page.context().storageState({ path: `session/${ENV}-state.json` });
}
export default globalSetup;
