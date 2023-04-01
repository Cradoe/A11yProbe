import puppeteer from "puppeteer";

export const getSubPages = async (rootUrl: string): Promise<string[]> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(rootUrl, { waitUntil: "networkidle0" });
  await page.waitForSelector("a");
  const links: string[] = await page.$$eval("a", (as: HTMLAnchorElement[]) =>
    as.map((a) => a.href)
  );

  await browser.close();

  let subPages = [...new Set(links.filter((link) => link.startsWith(rootUrl)))];

  return subPages;
};
