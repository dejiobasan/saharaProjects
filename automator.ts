import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--start-maximized",
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--disable-web-security",
    ],
  });

  const context = browser.defaultBrowserContext();
  let url = process.env.URL;
  await context.overridePermissions(url as string, ["geolocation"]);

  const page = await browser.newPage();
  let width: number = 1300;
  let height: number = 1024;

  await page.setViewport({
    width: Math.ceil(width),
    height: Math.ceil(height),
  });

  


})();
