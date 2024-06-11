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

  await page.waitForNavigation({
    waitUntil: 'networkidle0'
  });

  await page.waitForSelector("h1");

  const buttons = await page.$$('button'); //gets all the button on that page
  
  console.log(`Number of buttons found: ${buttons.length}`);

  for (let i = 0; i < buttons.length; i++) {
    const buttonText = await page.evaluate(el => el.innerText, buttons[i]);
    console.log(`Button ${i + 1}: ${buttonText}`);
  }
  
  await buttons[2].click();

  await page.locator("#search").fill("IKEJA");

  const btns = await page.$$('button');//gets all the button on that page

  console.log(`Number of buttons found: ${btns.length}`);

  // for (let i = 0; i < btns.length; i++) {
  //   const buttonText = await page.evaluate(el => el.innerText, btns[i]);
  //   console.log(`Button ${i + 1}: ${buttonText}`);
  // };

  await page.locator(".false").click();

  // await page.waitForNavigation({
  //   waitUntil: 'networkidle0'
  // });


  // for (const btn of btns) {
  //   const isDisabled = await btn.evaluate(b => b.disabled);
  //   if (!isDisabled) {
  //     await btn.click();
  //     console.log("Enabled button clicked.");
  //     break;
  //   }
  // }

  // await buttons1[5].click();

  // const filterbuttons = await page.$$(".filterButton")

  // console.log(filterbuttons);

  // await filterbuttons[0].click()

  // await page.waitForSelector(`${filterbuttons[0]}`);

  // await page.click(".filterButton");

  // await buttons1[6].click();

  // await buttons1[7].click();

  // await buttons1[13].click();

  // await buttons1[14].click();

})();