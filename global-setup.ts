// global-setup.ts


import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // await page.fill("//input[@placeholder='Username']", 'Admin');
  // await page.fill("//input[@placeholder='Password']", 'admin123');
  // await page.click("//button[normalize-space()='Login']");

    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    
    await page.context().storageState({ path: 'auth.json' });

}

export default globalSetup;
