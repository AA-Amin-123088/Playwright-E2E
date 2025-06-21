import { test, request, expect, chromium, Page, APIRequestContext } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

test.describe.serial('TEST CASE 1-Validate registration using valid data:-', async () => {
  let page: Page;
  test.beforeAll("Browser is open without fixture",async()=>{
      test.setTimeout(60000);
      const browser=await chromium.launch();
      const context=await browser.newContext();
      page=await context.newPage();
  })
  test.afterAll("Browser is closed without fixture",async()=>{
      page.close();
  })
  test('Open current browser and disable notifications', async () => {
      await page.goto("https://www.nop-station.com/");
    });
  test('Hover the item and click register button', async () => {
      await page.click("//body/div[@class='master-wrapper-page']/div[@class='header']/div[@class='container']/div[@class='header-lower']/div[@class='header-links-wrapper']/div[@class='header-links']/ul/li[@class='user-dropdown-menu']/a[1]");
      await page.waitForTimeout(5000);
    });
});


test.describe('API Testing with Playwright', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async ({ playwright }) => {
    // Create API request context
    apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('GET request - fetch a post', async () => {
    const response = await apiContext.get('/posts/1');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
  });

  test('POST request - create a post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await apiContext.post('/posts', {
      data: newPost,
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(newPost);
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });
});


test('API Get Request', async({request}) => {
  const response=await request.get('https://reqres.in/api/users/2');
  // expect(response.status()).toBe(200);
  // const text=await response.text();
  // expect(text).toContain('John')
  console.log(await response.json());
});
