import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../test-data/loginData.json'

test('valid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    // await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    );

    // await loginPage.verifyLoginSuccess();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('invalid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    // await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(
        loginData.invalid_user.username,
        loginData.invalid_user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
});

