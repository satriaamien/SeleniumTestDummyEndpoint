const { By } = require("selenium-webdriver");
const Page = require("./Page");

class LoginPage extends Page {
  // initialization
  constructor(driver) {
    // this.driver = driver;
    super(driver);
  }

  // element locators
  usernameEl = By.id("user-name");
  passwordEl = By.id("password");
  loginbtnEl = By.id("login-button");

  //page action

  async endpointPage() {
    // await this.driver.get("https://www.saucedemo.com/v1/");
    await this.openUrl("/");
  }

  async loginProcess(username, password) {
    await this.driver.findElement(this.usernameEl).sendKeys(username);
    await this.driver.findElement(this.passwordEl).sendKeys(password);
    await this.driver.findElement(this.loginbtnEl).click();
  }

  async findTextProduct() {
    return await this.driver.findElement(By.css(".product_label")).getText();
  }
}
module.exports = LoginPage;
