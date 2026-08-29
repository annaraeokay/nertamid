import { chromium } from "playwright";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.setDefaultTimeout(60000);
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => { if (m.type() === "error") console.log("CONSOLE", m.text()); });
const res = await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded", timeout: 30000 });
console.log("status", res?.status());
await page.waitForSelector("canvas", { timeout: 20000 });
await page.waitForTimeout(1800);
const txt = await page.locator("body").innerText();
console.log("TEXT", JSON.stringify(txt.slice(0, 400)));
await page.screenshot({ path: "/workspace/screenshots/idle-plate.png", timeout: 15000, animations: "disabled" });
console.log("ok");
await browser.close();
