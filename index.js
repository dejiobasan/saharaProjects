const puppeteer = require("puppeteer");
require("dotenv").config();

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
  await context.overridePermissions(process.env.URL, ["geolocation"]);

  const page = await browser.newPage();
  const width = 1300;
  const height = 1024;

  await page.setViewport({
    width: Math.ceil(width),
    height: Math.ceil(height),
  }); //sets the viewport of the webpage

  await page.goto(process.env.URL);

  await page.waitForSelector("h1");

  await page.waitForSelector(".form");

  const inputs = await page.$$(".inputClass"); // gets the both input selectors by their class names
  await inputs[0].type(process.env.USERNAME); //login the username
  await inputs[1].type(process.env.PASSWORD); // login the password

  //   await page.screenshot({ path: "IEPAGE.png" });

  await page.click("#login"); //click login button

  await page.waitForSelector('button');

  const buttons = await page.$$('button'); //gets all the button on that page
  
  console.log(`Number of buttons found: ${buttons.length}`);

  if (buttons.length > 1) {
    await buttons[1].click();
    console.log('Second button clicked.');
  } else {
    console.log("less than two buttons found on the page.");
  }


})();
