const { By, WebDriver } = require("selenium-webdriver");
const Page = require("./Page");

class CartPage extends Page {
  // initialization
  constructor(driver) {
    // this.driver = driver;
    super(driver);
  }

  firstItemList = By.css(".inventory_item_name");

  async endpointPage() {
    await this.openUrl("/cart.html");
  }

  async checkTitleItem() {
    return await this.driver.findElement(this.firstItemList).getText();
  }
  
}

module.exports = CartPage;
