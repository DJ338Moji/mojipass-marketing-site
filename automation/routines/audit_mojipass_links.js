const crawler = require('../core/crawler');
const config = require('../config');

async function auditMojipassLinks(options = {}) {
  console.log(`🔍 [Routine 2] Auditing Mojipass ecosystem links...`);

  const urlsToTest = new Set([
    config.mojipass.marketingDomain + '/',
    config.mojipass.marketingDomain + '/privacy',
    config.mojipass.marketingDomain + '/terms',
    config.mojipass.marketingDomain + '/support',
    config.mojipass.marketingDomain + '/resources',
    config.mojipass.rootDomain + '/',
    config.mojipass.partnerDomain + '/',
    config.mojipass.appDomain + '/'
  ]);

  // Crawl marketing site HTML to discover any rendered links
  const siteRes = await crawler.fetchHtml(config.mojipass.marketingDomain + '/');
  if (siteRes.html) {
    const pageLinks = crawler.extractLinks(siteRes.html, config.mojipass.marketingDomain);
    pageLinks.forEach(l => {
      // Test mojipass domain links and key docs
      if (l.includes('mojipass.com')) {
        urlsToTest.add(l);
      }
    });
  }

  const urlList = Array.from(urlsToTest);
  console.log(`Found ${urlList.length} distinct Mojipass URLs to verify.`);

  const results = await crawler.auditBatch(urlList, options.concurrency || 4);

  const broken = [];
  let okCount = 0;

  for (const r of results) {
    if (r.is404) {
      broken.push({
        url: r.initialUrl,
        finalUrl: r.finalUrl,
        status: 404,
        source: 'mojipass navigation / portals',
        durationMs: r.durationMs
      });
    } else if (!r.isError) {
      okCount++;
    } else {
      // 302/307 redirects to login or auth routes are considered valid for app/partner portals
      if (r.status === 302 || r.status === 307 || r.status === 200) {
        okCount++;
      } else {
        broken.push({
          url: r.initialUrl,
          finalUrl: r.finalUrl,
          status: r.status,
          source: 'mojipass navigation / portals',
          durationMs: r.durationMs
        });
      }
    }
  }

  console.log(`✅ [Routine 2 Completed] Checked ${results.length} URLs: ${okCount} OK, ${broken.length} broken.`);
  return {
    auditedCount: results.length,
    okCount,
    broken
  };
}

module.exports = auditMojipassLinks;
