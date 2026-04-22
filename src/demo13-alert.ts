import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.nasscom.in/nasscom-membership");
//register the event to modify alert handling. 
await page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
})

//click on calculate fee
await page.locator("xpath=//a[@id='calculate-fee']").click();

// not working
// const d=page.waitForEvent('dialog')
// await page.locator("xpath=//a[@id='calculate-fee']").click();
// const dialogue=await d;

await page.waitForTimeout(5000)
await browser.close()