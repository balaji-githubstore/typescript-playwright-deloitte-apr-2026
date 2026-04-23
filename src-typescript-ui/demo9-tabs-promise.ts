import { chromium,firefox } from "playwright"


const browser = await firefox.launch({ headless: false });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/");

const [newPage,]=await Promise.all(
    [page.waitForEvent('popup'),
    page.locator("xpath=//a[contains(@href,'twitter')]").click()
    ])

await newPage.locator("xpath=//span[text()='Create account']").click()
// await newPage.close();

await page.waitForTimeout(5000)
await browser.close()