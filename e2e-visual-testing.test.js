const TechClinincPage = require("./pageobjects/TechClinicPage");
const setupDriver = require("./utils/setupDrivers");

// # TUGAS
// - buat visual testing untuk sebuah web, minimal 5 halaman
// - pisahkan filenya dari file testing yang lain
// - upload tugasnya ke github
// - max pengumpulan besok siang

// const { existsSync } = require("fs");
// const isFileExist = existsSync("./screenshots/actual/hello.jpg");
// console.log(isFileExist ? "ada" : "tidak ada");

describe.only("check visual testing", () => {
  /**@type {WebDriver} */ let driver;
  /**@type {TechClinincPage} */ let techClinicPage;

  before(async () => {
    driver = await setupDriver();
    techClinicPage = new TechClinincPage(driver);
  });

  after(async () => {
    await driver.close();
  });

  afterEach(async () => {
    await driver.sleep(1000);
  });

  describe("Try Dashboard Page", () => {
    it("image valid", async () => {
      await techClinicPage.endpoindPage("https://prosigmaka.com/");
      await techClinicPage.visualTesting("baseDashboard", "actualDashboard");
    });
  });

  describe("Try Find Job Page", () => {
    it("image valid", async () => {
      await techClinicPage.endpoindPage("https://prosigmaka.com/find-jobs/");
      await techClinicPage.visualTesting("baseFindJob", "actualFindJob");
    });
  });

  describe("Try Prodemy Page", () => {
    it("image valid", async () => {
      await techClinicPage.endpoindPage("https://prosigmaka.com/prodemy/");
      await techClinicPage.visualTesting("baseProdemy", "actualProdemy");
    });
  });

  describe("Try Article Page", () => {
    it("image valid", async () => {
      await techClinicPage.endpoindPage("https://prosigmaka.com/article/");
      await techClinicPage.visualTesting("baseArticle", "actualArticle");
    });
  });

  describe("Try Tech Clinic Page", () => {
    it("image valid", async () => {
      await techClinicPage.endpoindPage("https://prosigmaka.com/tech-click/");
      await techClinicPage.visualTesting("baseTechClinic", "actualTechClinic");
    });
  });
});
