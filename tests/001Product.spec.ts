import { test, expect } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
import { PageObject } from '../pageobject/PageObject';
import { clearAndTypeInput } from '../utils/CustomCommands';
test.describe('test2222', () => {
  test.beforeEach(async({page}) => {
    await page.goto("https://automationexercise.com/login");
  });
  test.afterEach(async ({page})=>{
    await page.close();
  });
  test('Login and Product E2E Test',async({page}) => {
    const ObjectManager=new PageObject(page);
    await ObjectManager.homeObj.name_input_field().fill("tania");
    await ObjectManager.homeObj.email_address_input_field().fill(randomEmail);
    await delay(3000);
    await clearAndTypeInput(ObjectManager.homeObj.email_address_input_field(),1+randomEmail);
    await delay(3000);
  });
});





