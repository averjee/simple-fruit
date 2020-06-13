import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
const puppeteer = require('puppeteer');

describe('workspace-project App', async () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Purchase 1: 2 oranges + 1 apple + 2 bananas from main fruits screen = £3.85', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200');
    
    await page.waitForSelector('li .mat-card');
    await page.waitForSelector('#price');

    // purchase 2 oranges
    await page.click('li:first-child .mat-card #details');
    await page.click('li:first-child .mat-card #details');

    // purchase 1 apple
    await page.click('li:nth-child(2) .mat-card #details');

    // purchase 2 bananas
    await page.click('li:nth-child(3) .mat-card #details');
    await page.click('li:nth-child(3) .mat-card #details');

    const price = await page.evaluate(() => document.querySelectorAll('#price')[0].textContent);
    expect(price).toBe('£3.85');

    await browser.close();
  });

  it('Purchase 2: 1 orange + 2 apples from main fruits screen + 1 banana from banana details screen = £3.05', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200');
    
    await page.waitForSelector('li .mat-card');
    await page.waitForSelector('#price');

    // purchase 1 orange from main fruits screen
    await page.click('li:first-child .mat-card #details');

    // purchase 2 apples from main fruits screen
    await page.click('li:nth-child(2) .mat-card #details');
    await page.click('li:nth-child(2) .mat-card #details');

    // purchase 1 banana from banana details screen
    await page.click('li:nth-child(3) .mat-card img');
    await page.waitForSelector('#details');
    await page.click('#details');

    const price = await page.evaluate(() => document.querySelectorAll('#price')[0].textContent);
    expect(price).toBe('£3.05');

    await browser.close();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
