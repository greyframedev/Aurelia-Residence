import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const PORT = 9222;
const URL = "http://localhost:4173/";

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Launching Edge in headless mode with remote debugging...");
  const edge = spawn(EDGE_PATH, [
    `--remote-debugging-port=${PORT}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1920,1080",
    "about:blank"
  ]);

  await sleep(1500);

  // Get debug targets
  let targets = null;
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/json`);
      targets = await res.json();
      break;
    } catch (e) {
      await sleep(500);
    }
  }

  if (!targets || targets.length === 0) {
    console.error("Failed to connect to Edge debug endpoint.");
    edge.kill();
    process.exit(1);
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  console.log("Connecting to page target:", pageTarget.webSocketDebuggerUrl);

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

  const consoleLogs = [];
  const errors = [];

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve } = pending.get(data.id);
      pending.delete(data.id);
      resolve(data.result);
    }
    if (data.method === 'Runtime.consoleAPICalled') {
      const text = data.params.args.map(a => a.value || JSON.stringify(a)).join(' ');
      consoleLogs.push({ type: data.params.type, text });
      console.log(`[Browser Console ${data.params.type}]:`, text);
      if (data.params.type === 'error') {
        errors.push(text);
      }
    }
  };

  await new Promise(r => ws.onopen = r);
  console.log("Connected to CDP WebSocket.");

  await send("Page.enable");
  await send("Runtime.enable");

  console.log("Navigating to", URL);
  await send("Page.navigate", { url: URL });
  await sleep(2000);

  // Take hero screenshot
  async function takeScreenshot(name) {
    const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 85 });
    const buffer = Buffer.from(shot.data, 'base64');
    const filePath = path.join(process.cwd(), 'scratch', `${name}.jpg`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved screenshot: ${filePath} (${buffer.length} bytes)`);
  }

  await takeScreenshot('00_hero_overlay');

  // Helper to evaluate script
  async function evalJs(expr) {
    const res = await send("Runtime.evaluate", { expression: expr, returnByValue: true });
    return res.result ? res.result.value : null;
  }

  // Scroll tests accurately hitting chapter midpoints
  const scrollSteps = [
    { name: '01_arrival_mid', scrollY: 800 },
    { name: '02_living_space', scrollY: 2350 },
    { name: '03_culinary_space', scrollY: 3870 },
    { name: '04_master_suite', scrollY: 5420 },
    { name: '05_private_spa', scrollY: 6970 },
    { name: '06_the_terrace', scrollY: 8520 },
    { name: '07_studio_manifesto', scrollY: 10400 },
    { name: '08_services_contact', scrollY: 12600 }
  ];

  for (const step of scrollSteps) {
    await evalJs(`window.scrollTo(0, ${step.scrollY})`);
    await sleep(700); // allow lerp and video seek
    const state = await evalJs(`({
      scrollY: window.scrollY,
      activeTitle: document.querySelector('.floating-editorial-block.is-active .editorial-room-title')?.textContent,
      activeChapRow: document.querySelector('.floating-editorial-block.is-active .editorial-chap-row')?.textContent?.trim(),
      activeAlignment: document.querySelector('.floating-editorial-block.is-active')?.className,
      activeOpacity: document.querySelector('.floating-editorial-block.is-active')?.style.opacity,
      headerChapter: document.getElementById('header-chapter-num')?.textContent,
      hudTimecode: document.getElementById('hud-timecode')?.textContent,
      hudSpace: document.getElementById('hud-space-tag')?.textContent
    })`);
    console.log(`Step ${step.name} State:`, state);
    await takeScreenshot(step.name);
  }

  // Test reverse scroll
  console.log("Testing reverse scroll back to Chapter 02...");
  await evalJs(`window.scrollTo(0, 2350)`);
  await sleep(700);
  const revState = await evalJs(`({
    scrollY: window.scrollY,
    activeTitle: document.querySelector('.floating-editorial-block.is-active .editorial-room-title')?.textContent,
    activeAlignment: document.querySelector('.floating-editorial-block.is-active')?.className,
    headerChapter: document.getElementById('header-chapter-num')?.textContent
  })`);
  console.log("Reverse Scroll State:", revState);
  await takeScreenshot('09_reverse_to_living');

  // Test modal opening
  console.log("Testing commission modal opening...");
  await evalJs(`document.getElementById('open-inquiry-btn')?.click()`);
  await sleep(400);
  await takeScreenshot('10_commission_modal');

  console.log("Browser test completed. Total errors:", errors.length);
  ws.close();
  edge.kill();
  process.exit(errors.length > 0 ? 1 : 0);
}

run().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
