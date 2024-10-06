import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function getServerSideProps({ res }) {
  // An array of URLs to include in the sitemap
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/a', changefreq: 'daily', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
    { url: '/browse', changefreq: 'weekly', priority: 0.6 },
    { url: '/faq', changefreq: 'monthly', priority: 0.4 },
    { url: '/faqs', changefreq: 'monthly', priority: 0.4 },
    { url: '/faqs/question', changefreq: 'monthly', priority: 0.3 },
    { url: '/policies', changefreq: 'yearly', priority: 0.3 },
    { url: '/policies/compliance', changefreq: 'yearly', priority: 0.3 },
    { url: '/policies/privacy', changefreq: 'yearly', priority: 0.3 },
    { url: '/policies/terms', changefreq: 'yearly', priority: 0.3 },
    { url: '/resources', changefreq: 'monthly', priority: 0.5 },
    { url: '/signin', changefreq: 'monthly', priority: 0.4 },
    { url: '/studio/events', changefreq: 'monthly', priority: 0.5 },
    { url: '/w', changefreq: 'monthly', priority: 0.4 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://fidio.ca' });

  // Create a sitemap from the stream
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  // Set the response content type and send the sitemap
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
