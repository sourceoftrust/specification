import { frontmatter } from './specification/source-of-trust/index.md';
export function GET() {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://sourceoftrust.org/</loc></url><url><loc>https://sourceoftrust.org/about/</loc></url><url><loc>https://sourceoftrust.org/specification/source-of-trust/</loc><lastmod>${frontmatter.date}</lastmod></url></urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
