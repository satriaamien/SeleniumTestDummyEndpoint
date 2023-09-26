const { existsSync, writeFileSync, readFileSync } = require("fs");
const Page = require("./Page");
const chai = require("chai");
const { chaiImage } = require("chai-image");

chai.use(chaiImage);
const { expect } = chai;

class TechClinincPage extends Page {
  constructor(driver) {
    super(driver);
  }

  async endpoindPage(url) {
    // await this.prosigmaUrl("/tech-click/");
    await this.driver.get(url);
  }

  async visualTesting(base, actual) {
    const baseScreenshotPath = `screenshoots/base/${base}.jpg`;
    const actualScreenshotPath = `screenshoots/actual/${actual}.jpg`;
    const isBaseScreenshotExist = existsSync(baseScreenshotPath);
    const pageScreenshot = await this.driver.takeScreenshot();
    const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");

    if (isBaseScreenshotExist) {
      const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

      writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
      expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
    } else {
      writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
    }
  }
}

module.exports = TechClinincPage;
