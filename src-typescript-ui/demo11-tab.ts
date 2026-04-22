import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://x.com/");

//click on signup with google
//span[text()='Sign up with Google']
const [newPage,] = await Promise.all(
    [page.waitForEvent('popup'),
    page.locator("xpath=//span[text()='Sign up with Google']").click()
    ])
await newPage.waitForLoadState();

console.log(await newPage.title())
await page.waitForTimeout(5000)
await browser.close()
