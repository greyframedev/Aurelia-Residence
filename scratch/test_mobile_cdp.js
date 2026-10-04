import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const PORT = 9223;
const URL = "http://localhost:4173/";

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Launching Edge for Mobile test (390x844)...");
  const edge = spawn(EDGE_PATH, [
    `--remote-debugging-port=${PORT}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=390,844",
    "about:blank"
  ]);

  await sleep(1500);

  const res = await fetch(`http://localhost:${PORT}/json`);
  const targets = await res.json();
  const pageTarget = targets.find(t => t.type === 'page') || targets[0];

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise(r => ws.onopen = r);
  await send("Page.enable");
  await send("Runtime.enable");

  // Emulate mobile device metrics
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await send("Page.navigate", { url: URL });
  await sleep(1800);

  async function takeScreenshot(name) {
    const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 85 });
    const buffer = Buffer.from(shot.data, 'base64');
    const filePath = path.join(process.cwd(), 'scratch', `${name}.jpg`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved mobile screenshot: ${filePath} (${buffer.length} bytes)`);
  }

  await takeScreenshot('mobile_00_hero');

  // Scroll to arrival
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 1000)" });
  await sleep(600);
  await takeScreenshot('mobile_01_arrival');

  // Scroll to living room
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 2600)" });
  await sleep(600);
  await takeScreenshot('mobile_02_living');

  // Open drawer menu
  await send("Runtime.evaluate", { expression: "document.getElementById('open-drawer-btn').click()" });
  await sleep(400);
  await takeScreenshot('mobile_03_drawer');

  ws.close();
  edge.kill();
  console.log("Mobile test complete.");
}

run().catch(err => {
  console.error("Mobile test failed:", err);
  process.exit(1);
});
