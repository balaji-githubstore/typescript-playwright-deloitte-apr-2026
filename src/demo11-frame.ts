import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://mc.login.exacttarget.com/hub-cas/login");


//click on Get Free CRM

await page.waitForTimeout(5000)
await browser.close()