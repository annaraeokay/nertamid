import { chromium } from "playwright";

const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});

async function shot(viewport, path, extra) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2600);
  if (extra) await extra(page);
  await page.screenshot({ path });
  await page.close();
  return errors;
}

const e1 = await shot({ width: 1280, height: 800 }, "/workspace/screenshots/idle-plate.png");
console.log("desktop idle errors", e1);

const e2 = await shot({ width: 390, height: 844 }, "/workspace/screenshots/idle-mobile.png");
console.log("mobile idle errors", e2);

const e3 = await shot({ width: 1280, height: 800 }, "/workspace/screenshots/open-mid.png", async (page) => {
  await page.getByRole("button", { name: "Open Cookie" }).click();
  await page.waitForTimeout(2800);
});
console.log("open mid errors", e3);

const e4 = await shot({ width: 1280, height: 800 }, "/workspace/screenshots/fortune.png", async (page) => {
  await page.getByRole("button", { name: "Open Cookie" }).click();
  await page.waitForTimeout(8500);
});
console.log("fortune errors", e4);

await browser.close();
console.log("done");
