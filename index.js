const puppeteer = require("puppeteer");
require("dotenv").config();

async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(process.env.URL);

  await page.waitForSelector("h1");

  await page.waitForSelector("form");

  await page.type("inputClass", process.env.USERNAME);
  await page.type("inputClass", process.env.PASSWORD);

  await page.click("submitButton"); //click login button
};
