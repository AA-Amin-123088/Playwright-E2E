// import { test,chromium,Page } from '@playwright/test';
// const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

// test.describe.serial('TEST SUITE', async () => {
//   let page: Page;
//   test.beforeAll("Browser is open without fixture",async()=>{
//       const browser=await chromium.launch();
//       const context=await browser.newContext();
//       page=await context.newPage();
//       await page.goto("https://www.nop-station.com/");
//   })
//   test.afterAll("Browser is closed without fixture",async()=>{
//       page.close();
//   })
//   test('Without-fixtures 3', async () => {
//       await page.locator('//*[@id="allow-push-notification"]').click();;
//     });
//   test('Without-fixtures 4', async () => {
//       await page.locator("//a[@class='ico-cart']").click();
//     });
// });