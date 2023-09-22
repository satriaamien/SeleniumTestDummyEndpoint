// # TUGAS
// - buat script automation menggunakan selenium
// - automasikan flow dari web https://www.saucedemo.com/v1/index.html
// - mulai flownya dari login -> add to cart -> checkout -> fill checkout form -> overview -> finish -> logout
// - upload kodenya ke gitub dan kirim ke chat pribadi trainer
// - max pengerjaan besok siang

const { Builder, Browser, By, until } = require("selenium-webdriver");

const latihan = async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("https://www.saucedemo.com/v1/");

  //login
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.id("login-button")).click();

  //sort-add cart-remove cart
  await driver
    .findElement(By.css(".product_sort_container option[value='lohi']"))
    .click();
  await driver
    .findElement(By.css(".inventory_item:nth-child(1) .btn_primary"))
    .click();
  await driver
    .findElement(By.css(".inventory_item:nth-child(2) .btn_primary"))
    .click();
  await driver
    .findElement(By.css(".inventory_item:last-child .btn_primary"))
    .click();
  await driver
    .findElement(By.css(".inventory_item:last-child .btn_secondary"))
    .click();
  await driver.findElement(By.css("#shopping_cart_container")).click();
  await driver.findElement(By.css(".btn_action")).click();

  //fill form information
  await driver.findElement(By.id("first-name")).sendKeys("Dede");
  await driver.findElement(By.id("last-name")).sendKeys("Inoen");
  await driver.findElement(By.id("postal-code")).sendKeys("11340");

  //success
  await driver.findElement(By.css(".cart_button")).click();
  await driver.findElement(By.css(".cart_button")).click();
  //out system

  await driver.findElement(By.css(".bm-burger-button")).click();
  // const logout = await driver.findElement(By.id("logout_sidebar_link"));
  // await driver.wait(until.elementIsVisible(logout), 5000);
  // await logout.click();
  await new Promise((done) => setTimeout(done, 2000));
  await driver.findElement(By.css("#logout_sidebar_link")).click();
  await driver.close();
};

latihan();
