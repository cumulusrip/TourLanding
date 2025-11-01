// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');


const sitemap = new SitemapStream({ hostname: 'https://urbaniasechalo.com' });

const routes = ['/'];

const writeStream = createWriteStream('./public/sitemap.xml');

routes.forEach((url) => sitemap.write({ url, changefreq: 'weekly', priority: 1.0 }));
sitemap.end();

streamToPromise(sitemap).then(() => console.log('✅ Sitemap generated for urbaniasechalo.com'));
sitemap.pipe(writeStream);
