import {test, expect} from '@playwright/test'

test('login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // await page.gotourl('');
    // page.randomMethod();


    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const loginButton = page.locator('#login-button');
    
    // username.goto('');
    // username = "text";

    page.locator(123);
    await username.fill(123);

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    await loginButton.pressKey();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toBeVisible();
});