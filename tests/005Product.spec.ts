import { test, request, expect, chromium, Page, APIRequestContext } from '@playwright/test';
import * as config from "../config";
import { PageObject } from '../pageobject/PageObject';
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
test.describe.serial('TEST CASE 1-Validate registration using valid data:-', async () => {
  let page: Page;
  test.beforeAll("Browser is open without fixture",async()=>{
      const browser=await chromium.launch();
      const context=await browser.newContext();
      page=await context.newPage();
  })
  test.afterAll("Browser is closed without fixture",async()=>{
      page.close();
  })
  test('Open current browser and disable notifications', async () => {
    const ObjectManager=new PageObject(page);
    await page.goto(config.PageUrl001);
    await expect(ObjectManager.homeObj.home_text_header()).toHaveText("Home");
    await ObjectManager.homeObj.product_link().click();
    await ObjectManager.homeObj.add_to_cart_button().click();
    await ObjectManager.homeObj.view_cart_link().click();
    });
  // test('Hover the item and click register button', async () => {
  //   const ObjectManager=new PageObject(page);
  //   await ObjectManager.homeObj.proceed_to_checkout_button().click();
  //   await ObjectManager.homeObj.register_login_button().click();
  //   await ObjectManager.homeObj.name_input_field().fill("tania");
  //   await ObjectManager.homeObj.email_address_input_field().fill(randomEmail);
  //   await ObjectManager.homeObj.sign_up_button().click();
  //   });
});

// let reqContext2: APIRequestContext;
// test.beforeAll("Before all the test", async () => {
//   reqContext2 = await request.newContext({
//     baseURL: "https://restful-booker.herokuapp.com",
//     extraHTTPHeaders:{
//       Accept:"application/json"
//     }
//   });
// });

// test('Practice-1',async ({request}) => {
//   const resp1=await request.get("https://restful-booker.herokuapp.com/booking",{
//     headers:{
//       Accept:"application/json"
//     }
//   });
//   console.log(await resp1.json());
// });
// test('Practice-2',async () => {
//   const reqContext=await request.newContext({
//     baseURL:"https://restful-booker.herokuapp.com",
//     extraHTTPHeaders:{
//       Accept:"application/json"
//     }
//   });
//   const resp2=await reqContext.get("/booking");
//   console.log(await resp2.json());
// });
// test("Practice-3", async ({request}) => {
//   const resp4 = await request.get("/booking/641");
//   console.log(await resp4.json());
// });
// test("Practice-4", async ({request}) => {
//   const resp5 = await request.get("/booking?firstname=Jim&lastname=Brown");
//   console.log(await resp5.json());
// });
// test("Practice-5", async ({request}) => {
//   const resp6 = await request.get("/booking",{
//     params:{
//       firstname:"Josh",
//       lastname:"Allen"
//     }
//   });
//   console.log(await resp6.json());

// });

// test("Practice-Post-6", async ({request}) => {
//   const resp7 = await request.post("/booking",{
//     data:{
//       firstname: 'Jim11',
//       lastname: 'brown11',
//       totalprice: 11111,
//       depositpaid: true,
//       bookingdates: { checkin: '2018-11-11', checkout: '2019-11-11' },
//       additionalneeds: 'midnight snack111'
//     }
//   });
//   const jsonResponse1=await resp7.json();
//   console.log(jsonResponse1);
// });

//update