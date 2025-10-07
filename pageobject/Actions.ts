import { expect, Page } from '@playwright/test';

export class Actions {
    async clickElement(page: Page, locator: string) {
        try {
            await page.locator(locator).click();
        } catch (error) {
            throw error;
        }
    }
    async textValidation(page: Page, locator: string, expectedText: string) {
        try {
            const actualText = await page.locator(locator).textContent();
            expect(actualText?.trim()).toBe(expectedText);
        } catch (error) {
            throw error;
        }
    }
    async doEnterValue(page: Page, locator: string, value: string) {
        try {
            await page.locator(locator).fill(value);
        } catch (error) {
            throw error;
        }
    }
    async elementVisible(page: Page, locator: string) {
        try {
            await expect(page.locator(locator)).toBeVisible();
        } catch (error) {
            throw error;
        }
    }
}
