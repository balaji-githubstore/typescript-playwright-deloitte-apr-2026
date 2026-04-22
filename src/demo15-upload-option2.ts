import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.ilovepdf.com/pdf_to_word");
//option 2 - waitForEvent

// const event=page.waitForEvent('filechooser')
// await page.locator("xpath=//span[text()='Select PDF file']").click()
// const filechooser1=await event;
// filechooser1.setFiles("c:/AutomationSession/demo.pdf")

const [filechooser,] = await Promise.all(
    [page.waitForEvent('filechooser'),
    page.locator("xpath=//span[text()='Select PDF file']").click()
    ])

await filechooser.setFiles("c:/AutomationSession/demo.pdf")

await page.waitForTimeout(5000)
await browser.close()