// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(req.body.url);

  await page.setViewport({ width: 999, height: 749 });
  const company = await page.evaluate(() => {
    const featureArticle = document.evaluate(
      '//*[@id="job-100802"]/td[2]/a[2]/h3',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    return featureArticle.textContent;
  });
  const title = await page.evaluate(() => {
    const featureArticle = document.evaluate(
      '//*[@id="job-100802"]/td[2]/h2',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    return featureArticle.textContent;
  });
  const text = await page.evaluate(() => {
    const featureArticle = document.evaluate(
      '//*[@id="jobsboard"]/tbody/tr[4]/td/div/div[1]/div',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    return featureArticle.textContent;
  });
  await browser.close();
  res.statusCode = 200;
  res.json({ company, title, text });
};
