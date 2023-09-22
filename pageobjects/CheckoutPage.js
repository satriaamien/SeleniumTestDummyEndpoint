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

  async endpointPage() {
    await this.openUrl("/checkout-step-one.html");
  }
  async fillData() {
    await this.driver.findElement(this.firstName).sendKeys("Dede");
    await this.driver.findElement(this.lastName).sendKeys("Inoen");
    await this.driver.findElement(this.postal).sendKeys("11340");
  }

  async succesFillData() {
    return await this.driver.findElement(this.succesCheckout).getText();
  }
  async clickContinue() {
    await this.driver.findElement(this.btnContinue).click();
  }
}

module.exports = CheckoutPage;
