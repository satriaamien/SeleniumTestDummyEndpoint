const { Builder, Browser, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const LoginPage = require("./pageobjects/LoginPage");
const setupDriver = require("./utils/setupDrivers");
const CheckoutPage = require("./pageobjects/CheckoutPage");

describe("Negative Case Checkout", () => {
  /**@type {WebDriver} */ let driver;
  /**@type {CheckoutPage} */ let checkoutPage;

  before(async () => {
    driver = await setupDriver();
    checkoutPage = new CheckoutPage(driver);
  });

  after(async () => {
    await driver.close();
  });

  afterEach(async () => {
    await driver.sleep(1000);
  });

  describe("percobaan isi data firstName kosong", () => {
    it("gagal masuk halaman selanjutnya", async () => {
      await checkoutPage.endpointPage();
      await checkoutPage.fillData("", "Inoen", "1123");
      await checkoutPage.clickContinue();

      const errCheckout = await checkoutPage.errorCheckout();
      expect(errCheckout).include("First Name is required");
    });
  });

  describe("percobaan isi data LastName kosong", () => {
    it("gagal masuk halaman selanjutnya", async () => {
      await checkoutPage.endpointPage();
      await checkoutPage.fillData("Dede", "", "1123");
      await checkoutPage.clickContinue();

      const errCheckout = await checkoutPage.errorCheckout();
      expect(errCheckout).include("Last Name is required");
    });
  });

  describe("percobaan isi data Postal kosong", () => {
    it("gagal masuk halaman selanjutnya", async () => {
      await checkoutPage.endpointPage();
      await checkoutPage.fillData("Dede", "Inoen", "");
      await checkoutPage.clickContinue();

      const errCheckout = await checkoutPage.errorCheckout();
      expect(errCheckout).include("Postal Code is required");
    });
  });
});
