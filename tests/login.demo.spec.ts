import {test, expect, Locator} from '@playwright/test'

test('login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // await page.randomMethod()

    const username: Locator = page.locator('#user-name');
    const password: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    page.locator(123);
    //  username.goto('');
    // username = "text";
    await username.fill(123);

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    // await loginButton.pressKey();


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toBeVisible();
});