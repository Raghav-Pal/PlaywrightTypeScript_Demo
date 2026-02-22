import { test, expect } from '@playwright/test';

test('My First Test', async ({ page }) => {

    await page.goto('https://google.com');
    // await expect(page).toHaveURL('');

    await page.locator('textarea[name="q"]').fill('Playwright');
    // await page.locator('input[name="q"]').fill('Playwright');
    
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    // await page.pause();
    // const results = await page.locator('#search').count();
    const results = await page.locator('h3').allTextContents();

    expect(results.length).toBeGreaterThan(0);
   
  });