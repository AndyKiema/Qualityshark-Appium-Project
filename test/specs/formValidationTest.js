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
      const usernameRequirementButton = await driver.$("-android uiautomator:new UiSelector().text(\"Username is required\")");
      await expect(usernameRequirementButton).toHaveText("Username is required");
    });
});