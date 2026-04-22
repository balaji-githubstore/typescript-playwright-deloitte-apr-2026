import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.online.citibank.co.in/");

//hover on //div[text()='My Account']
//click on //div[text()='Banking with Citi'] will open new tab

//in new tab
//enter userid

await page.waitForTimeout(5000)
await browser.close()