import { chromium } from "playwright";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
async function shot(vp, path) {
  const page = await browser.newPage({ viewport: vp });
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2600);
  await page.screenshot({ path });
  await page.close();
}
await shot({ width: 1280, height: 800 }, "/workspace/screenshots/idle-plate.png");
await shot({ width: 390, height: 844 }, "/workspace/screenshots/idle-mobile.png");
await browser.close();
console.log("ok");
