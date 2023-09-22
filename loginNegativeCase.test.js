const { Builder, Browser, By, until } = require("selenium-webdriver");
const LoginPage = require("./pageobjects/LoginPage");
const setupDriver = require("./utils/setupDrivers");

describe("Negative Case", () => {
  /**@type {WebDriver} */ let driver;
  /**@type {LoginPage} */ let loginPage;
  before(async () => {
    driver = await setupDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.close();
  });

  afterEach(async () => {
    await driver.sleep(1000);
  });

  describe("percobaan data semua kosong ", () => {
    it("gagal", async () => {
      await loginPage.endpointPage();
      await loginPage.loginProcess("", "");
    });
  });

  describe("percobaan username valid password salah ", () => {
    it("gagal", async () => {
      await loginPage.endpointPage();
      await loginPage.loginProcess("standard_user", "qiw qiw");
    });
  });

  describe("percobaan username salah password valid ", () => {
    it("gagal", async () => {
      await loginPage.endpointPage();
      await loginPage.loginProcess("truno", "secret_sauce");
    });
  });
});
