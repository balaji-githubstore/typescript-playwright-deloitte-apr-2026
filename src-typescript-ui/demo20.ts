import { chromium } from "playwright";


const browserInstance = await chromium.launch({ channel: "chrome", headless: false });

const browsercontext = await browserInstance.newContext();

const page = await browsercontext.newPage();


await page.goto("https://x.com/")

let actualTitle: string = await page.title();
console.log(actualTitle)

// console.log(await page.content())

await page.locator("xpath=//input[@name='username_or_email']").fill("jack")

await page.locator("xpath=//p[text()='Continue']").click();