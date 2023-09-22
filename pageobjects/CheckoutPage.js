const { By } = require("selenium-webdriver");
const Page = require("./Page");

class CheckoutPage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  firstName = By.id("first-name");
  lastName = By.id("last-name");
  postal = By.id("postal-code");
  btnContinue = By.className("btn_primary");
  succesCheckout = By.className("subheader");
  errCO = By.css('[data-test="error"]');

  async endpointPage() {
    await this.openUrl("/checkout-step-one.html");
  }
  async fillData(firstName, lastName, postal) {
    await this.driver.findElement(this.firstName).sendKeys(firstName);
    await this.driver.findElement(this.lastName).sendKeys(lastName);
    await this.driver.findElement(this.postal).sendKeys(postal);
  }

  async succesFillData() {
    return await this.driver.findElement(this.succesCheckout).getText();
  }
  async clickContinue() {
    await this.driver.findElement(this.btnContinue).click();
  }

  async errorCheckout() {
    return await this.driver.findElement(this.errCO).getText();
  }
}

module.exports = CheckoutPage;
