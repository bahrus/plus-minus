import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage();

const logs = [];
page.on('console', msg => {
  const text = `[${msg.type()}] ${msg.text()}`;
  logs.push(text);
  console.log(text);
});
page.on('pageerror', err => {
  const text = `[pageerror] ${err.message}`;
  logs.push(text);
  console.log(text);
});

await page.goto('http://localhost:8000/assign-gingerly/tests/toggle-command.html');
await page.waitForTimeout(3000);

const result = await page.evaluate(() => {
  const el = document.getElementById('test-complete');
  return {
    hasAttr: el && el.hasAttribute('data-total'),
    passed: el ? el.getAttribute('data-passed') : null,
    failed: el ? el.getAttribute('data-failed') : null,
    total: el ? el.getAttribute('data-total') : null
  };
});
console.log('Result:', JSON.stringify(result));

await browser.close();
