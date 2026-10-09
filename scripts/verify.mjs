import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import worker from '../worker/index.js';
const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const origin = 'https://sourceoftrust.org';
const paths = ['/', '/specification/source-of-trust/'];
const definition = 'A Source of Trust (SoT) is an identifiable information-providing entity for which evidence of relevant competence, integrity, and reliable information practices justifies reliance on its attributable information within a defined context.';
for (const path of paths) {
  const html = readFileSync('dist' + path + 'index.html', 'utf8');
  assert(html.includes(definition));
  assert(html.includes('lang="en"'));
  assert(!/<style(?:\s|>)/i.test(html), 'CSP requires external stylesheets');
  assert(!/\sstyle=/.test(html), 'CSP disallows inline style attributes');
  assert(html.includes('rel="stylesheet"'), 'External stylesheet required');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
  assert(html.includes(`rel="canonical" href="${origin + path}"`));
  assert(html.includes('name="description"'));
  assert(html.includes('property="og:url"'));
  const scripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  assert(scripts[0][1].includes('application/ld+json'));
  const data = JSON.parse(scripts[0][2]);
  assert.equal(data['@context'], 'https://schema.org');
  const doc = data['@graph'][1];
  assert.equal(doc.url, origin + path);
  assert.equal(doc.license, 'https://creativecommons.org/publicdomain/zero/1.0/');
  if (path !== '/') { assert.equal(doc['@type'], 'TechArticle'); assert.equal(doc.version, version); assert(html.includes(`https://github.com/sourceoftrust/specification/tree/v${version}`)); assert(html.includes('id="3-scope-and-interpretation"')); assert.equal(doc.datePublished, '2026-10-09'); }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const m of html.matchAll(/href="(\/[^"#]*)(?:#([^"]+))?"/g)) {
    const file = 'dist' + m[1] + (m[1].endsWith('/') ? 'index.html' : '');
    assert(existsSync(file), `Missing internal URL: ${m[1]}`);
    if (m[2]) assert(readFileSync(file, 'utf8').includes(`id="${m[2]}"`), `Missing anchor: ${m[2]}`);
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(m[1]));
  console.log('Verified HTML, metadata, JSON-LD and anchors:', path);
}
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 2);
for (const path of paths) assert(sitemap.includes(`<loc>${origin + path}</loc>`));
assert(readFileSync('dist/robots.txt', 'utf8').includes('User-agent: *\nAllow: /'));
const redirect = await worker.fetch(new Request('https://www.sourceoftrust.org/specification/source-of-trust/?x=1'), {});
assert.equal(redirect.status, 301);
assert.equal(redirect.headers.get('location'), origin + '/specification/source-of-trust/?x=1');
const httpsRedirect = await worker.fetch(new Request('http://sourceoftrust.org/?x=1'), {});
assert.equal(httpsRedirect.status, 301);
assert.equal(httpsRedirect.headers.get('location'), origin + '/?x=1');
const response = await worker.fetch(new Request(origin + '/'), { ASSETS: { fetch: () => new Response('static') } });
assert.equal(await response.text(), 'static');
console.log('Verified sitemap, robots and www redirect.');
