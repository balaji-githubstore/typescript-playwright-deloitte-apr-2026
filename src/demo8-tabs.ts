import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

//all auto wait tries for 50s
// await page.setDefaultTimeout(50000)

await page.goto("https://opensource-demo.orangehrmlive.com/");


//start checking for any new popup (tab) opened or not
const popup =page.waitForEvent('popup')

//click on link which opens new tab/window
await page.locator("xpath=//a[contains(@href,'twitter')]").click();

//await and get the new tab page captured by page.waitForEvent("popup")
//tab2
const newPage=await popup


await newPage.locator("xpath=//span[text()='Create account']").click()
await newPage.close();


await page.waitForTimeout(5000)
await browser.close()