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

    

})();