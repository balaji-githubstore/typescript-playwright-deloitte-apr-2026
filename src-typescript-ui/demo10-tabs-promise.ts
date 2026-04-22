import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.online.citibank.co.in/");

//check for presence of locator
if (await page.locator("xpath=//button[@id='onetrust-accept-btn-handler']").count() == 1) {
    await page.locator("xpath=//button[@id='onetrust-accept-btn-handler']").click()
}

//hover on //div[text()='My Account']
await page.locator("xpath=//div[text()='My Account']").hover()

const [newPage,] = await Promise.all(
    [page.waitForEvent('popup'),
    page.locator("xpath=//div[text()='Banking with Citi']").click()
    ])

//in new tab
//enter userid
await newPage.locator("xpath=//input[@id='username']").fill("john")

await page.waitForTimeout(5000)
await browser.close()
