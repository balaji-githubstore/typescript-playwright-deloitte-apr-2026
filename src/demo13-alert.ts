import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.nasscom.in/nasscom-membership");

//click on calculate fee

await page.waitForTimeout(5000)
await browser.close()