import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.ilovepdf.com/pdf_to_word");
//option 3 - page.On

await page.on('filechooser',async filechooser=>{
    await filechooser.setFiles("c:/AutomationSession/demo.pdf")
})



console.log(await page.title())
await page.locator("xpath=//span[text()='Select PDF file']").click()

await page.waitForTimeout(5000)
await browser.close()