import { chromium } from "playwright";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(2200);
await page.getByRole("button", { name: "Open Cookie" }).click();
await page.waitForTimeout(3200);
await page.screenshot({ path: "/workspace/screenshots/open-mid.png" });
await page.waitForTimeout(6500);
await page.screenshot({ path: "/workspace/screenshots/fortune.png" });
const text = await page.locator("body").innerText();
console.log("body text sample:", text.slice(0, 400).replace(/\n/g, " | "));
await browser.close();
