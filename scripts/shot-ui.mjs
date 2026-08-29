import { chromium } from "playwright";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded", timeout: 30000 });
await page.waitForSelector("canvas", { timeout: 20000 });
await page.addStyleTag({ content: "canvas { visibility: hidden !important; }" });
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/idle-ui.png", timeout: 10000, animations: "disabled" });
console.log("ui ok");
await browser.close();
