import { test } from '@playwright/test';

test('Test 1', async ({ page }) => {

    console.log('..I am in Test 1..');
    await page.goto('https://playwright.dev/');

});

test('Test 2', async ({ page }) => {

    console.log('..I am in Test 2..')
    await page.goto('https://www.saucedemo.com/');

});