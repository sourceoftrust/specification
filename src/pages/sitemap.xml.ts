export function GET() {
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://sourceoftrust.org/</loc></url><url><loc>https://sourceoftrust.org/specification/source-of-trust/</loc><lastmod>2026-10-09</lastmod></url></urlset>', { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
