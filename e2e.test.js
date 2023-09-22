const { expect } = require("chai");
const { By } = require("selenium-webdriver");
const setupDriver = require("./utils/setupDrivers");
const LoginPage = require("./pageobjects/LoginPage");
const DashboardPage = require("./pageobjects/DashboardPage");
const CartPage = require("./pageobjects/CartPage");
const CheckoutPage = require("./pageobjects/CheckoutPage");
const CheckoutTwoPage = require("./pageobjects/CheckoutTwoPage");

describe("positif case", () => {
  describe("percobaan login dengan 3 user dan 1 password", async () => {
    /**@type {WebDriver} */ let driver;
    /**@type {LoginPage} */ let loginPage;
    /**@type {DashboardPage} */ let dashboardPage;
    /**@type {CartPage} */ let cartPage;
    /**@type {CheckoutPage} */ let checkoutPage;
    /** @type {CheckoutTwoPage} */ let checkoutTwoPage;

    before(async () => {
      driver = await setupDriver();
      loginPage = new LoginPage(driver);
      dashboardPage = new DashboardPage(driver);
      cartPage = new CartPage(driver);
      checkoutPage = new CheckoutPage(driver);
      checkoutTwoPage = new CheckoutTwoPage(driver);
    });

    after(async () => {
      await driver.close();
    });

    afterEach(async () => {
      await driver.sleep(2000);
    });

    it("login benar dengan username locked_out_user dan password secret_sauce sehingga menampilkan title product", async () => {
      await loginPage.endpointPage();
      await loginPage.loginProcess("locked_out_user", "secret_sauce");
      //login
      // const productText = await loginPage.findTextProduct();
      // expect(productText).include("Product");
    });

    it("percobaan login benar dengan username standard_user dan password secret_sauce sehingga menampilkan title product", async () => {
      await loginPage.endpointPage();
      await loginPage.loginProcess("standard_user", "secret_sauce");
      //login
      // const productText = await driver
      //   .findElement(By.css(".product_label"))
      //   .getText();
      const productText = await loginPage.findTextProduct();
      expect(productText).include("Product");
    });

    it("percobaan menambahkan barang belanjaan list ke 1", async () => {
      await dashboardPage.endpointPage();
      await dashboardPage.clickItemInventory();
      const itemInventory = await dashboardPage.getItemInventory();
      expect(itemInventory).include("Sauce Labs Backpack");
    });

    it("percobaan cek cart list barang yang telah di tambahkan sebelumnya", async () => {
      await cartPage.endpointPage();
      const itemInventory = await cartPage.checkTitleItem();
      expect(itemInventory).include("Sauce Labs Backpack");
    });

    it("percobaan isi data dengan valid", async () => {
      await checkoutPage.endpointPage();
      await checkoutPage.fillData();
      await checkoutPage.clickContinue();
      const successCheckout = await checkoutPage.succesFillData();
      expect(successCheckout).include("Overview");
    });

    it("percobaan memvalidasi pesanan yang dipesan", async () => {
      await checkoutTwoPage.endpointPage();
      const textList = await checkoutTwoPage.textList();
      expect(textList).include("Sauce Labs Backpack");
    });

    it("percobaan selesai pemesanan", async () => {
      await checkoutTwoPage.endpointPage();
      await checkoutTwoPage.clickFinish();
    });
  });
});
