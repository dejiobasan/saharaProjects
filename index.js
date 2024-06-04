const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto(process.env.URL);

  await page.waitForSelector("h1");

  await page.waitForSelector("form");

  //   await page.type("email", process.env.USERNAME);
  //   await page.type("password", process.env.PASSWORD);
  await page.locator("input").fill(process.env.USERNAME);
  await page.locator('input').fill(process.env.PASSWORD);

  await page.screenshot({ path: "IEPAGE.png" });

  //   await page.click("login"); //click login button
})();
