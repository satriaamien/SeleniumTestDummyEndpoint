const { By, WebDriver } = require("selenium-webdriver");
const Page = require("./Page");

class DashboardPage extends Page {
  // initialization
  constructor(driver) {
    // this.driver = driver;
    super(driver);
  }

  itemFirst = By.css(
    ".inventory_item:nth-child(1) .inventory_item_label .inventory_item_name"
  );
  itemFirstClick = By.css(".inventory_item:nth-child(1) .btn_primary");

  async endpointPage() {
    await this.openUrl("/inventory.html");
  }
  async getItemInventory() {
    return await this.driver.findElement(this.itemFirst).getText();
  }

  async clickItemInventory() {
    await this.driver.findElement(this.itemFirstClick).click();
  }
}

module.exports = DashboardPage;
