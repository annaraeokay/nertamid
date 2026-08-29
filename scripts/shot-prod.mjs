import { chromium } from "playwright";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => { if (m.type()==="error") console.log("CONSOLE", m.text()); });
await page.goto("http://127.0.0.1:8081/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3000);
const n = await page.locator("canvas").count();
console.log("canvas", n);
await page.screenshot({ path: "/workspace/screenshots/prod-idle.png" });
await browser.close();
