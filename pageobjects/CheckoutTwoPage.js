const { By } = require("selenium-webdriver");
const Page = require("./Page");

//extends for inheritance
class CheckoutTwoPage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  getTextList = By.css(".inventory_item_name");
  btnFinish = By.css(".btn_action");

  async endpointPage() {
    await this.openUrl("/checkout-step-two.html");
  }

  async textList() {
    return await this.driver.findElement(this.getTextList).getText();
  }
  async clickFinish() {
    await this.driver.findElement(this.btnFinish).click();
  }
}

module.exports = CheckoutTwoPage;
