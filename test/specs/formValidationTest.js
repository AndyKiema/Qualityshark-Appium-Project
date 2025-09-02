/// <reference types="webdriverio" />
/// <reference types="@wdio/mocha-framework" />
/// <reference types="@wdio/appium-service" />
const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

      //Empty Credentials
      await driver.setTimeout({ implicit: 8000 });
      const loginButton = await driver.$("accessibility id:test-LOGIN");
      await loginButton.click();
      const errorMessage = await driver.$("accessibility id:test-Error message");
      await errorMessage.isDisplayed();
      const usernameRequirementMessage = await driver.$("-android uiautomator:new UiSelector().text(\"Username is required\")");
      await expect(usernameRequirementMessage).toHaveText("Username is required");

      driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
      await driver.setTimeout({ implicit: 8000 }); 

      //Enter Username Only
      const usernameField = await driver.$("accessibility id:test-Username");
      await usernameField.addValue("standard_user");
      await loginButton.click();
      await errorMessage.isDisplayed();
      const passwordRequirementMessage = await driver.$("-android uiautomator:new UiSelector().text(\"Password is required\")");
      await expect(passwordRequirementMessage).toHaveText("Password is required");

      driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
      await driver.setTimeout({ implicit: 8000 });

      //Enter Password Only
      const passwordField = await driver.$("accessibility id:test-Password");
      await passwordField.addValue("secret_sauce");
      await loginButton.click();
      await errorMessage.isDisplayed();
      await expect(usernameRequirementMessage).toHaveText("Username is required");

      driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
      await driver.setTimeout({ implicit: 8000 });

      //Enter Valid Credentials
      await usernameField.addValue("standard_user");
      await passwordField.addValue("secret_sauce");
      await loginButton.click();
      const productPageHeader = await driver.$("-android uiautomator:new UiSelector().text(\"PRODUCTS\")");
      await expect(productPageHeader).toHaveText("PRODUCTS");

      driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
      await driver.setTimeout({ implicit: 8000 });

      //Enter Valid Username and Invalid Password
      await usernameField.addValue("standard_user");
      await passwordField.addValue("mypassword");
      await loginButton.click();
      await errorMessage.isDisplayed();
      const unmatchingCredentialsMessage = await driver.$("-android uiautomator:new UiSelector().text(\"Username and password do not match any user in this service.\")");
      await expect(unmatchingCredentialsMessage).toHaveText("Username and password do not match any user in this service.");

      driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
      await driver.setTimeout({ implicit: 8000 });

      //Enter Invalid Username and Valid Password
      await usernameField.addValue("myusername");
      await passwordField.addValue("secret_sauce");
      await loginButton.click();
      await errorMessage.isDisplayed();
      await expect(unmatchingCredentialsMessage).toHaveText("Username and password do not match any user in this service.");

    
    
    });
});