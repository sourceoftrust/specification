# Source of Trust

The independent, open Source of Trust initiative's reference website and
Editor's Draft v0.1. Editorial content is English and maintained in Markdown.
Astro generates static HTML and CSS. Cloudflare Workers serves Static Assets;
a small server-side handler redirects `www` to the canonical host.

## Local development

Requires Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

Only two editorial pages are published:
- https://sourceoftrust.org/
- https://sourceoftrust.org/specification/source-of-trust/

`src/pages/index.md` and `src/pages/specification/source-of-trust/index.md`
contain the editorial content. Shared layout, styles, and metadata are under
`src/layouts/` and `src/styles/`. Future documents may be added under
`specification/`, `rfc/`, and `concepts/`; no placeholder pages are generated.

## Cloudflare deployment

Worker: `sourceoftrust-specification`.
The production `wrangler.jsonc` serves the static build in `dist/`, bound as
`ASSETS`, on `sourceoftrust.org` and `www.sourceoftrust.org`. Account selection
is supplied by the authenticated Wrangler session. Missing URLs return 404.

```sh
npx wrangler login
npm run build
npx wrangler deploy --dry-run
npm run deploy
```

The canonical address is https://sourceoftrust.org. The handler returns a
permanent 301 from www to HTTPS on the apex, preserving the path and query
string. HTTP on the apex also redirects to HTTPS. Cloudflare manages the
custom-domain certificates. The workers.dev endpoint remains available as a
preview; its metadata points to the canonical .org URLs.

After deployment, check certificates, HTTP and www redirects, both editorial
pages, canonical URLs, robots.txt, sitemap.xml, and a missing URL. Obtain
approval before changing existing DNS, productive routes, or global security
rules. Do not modify any commercial Source of Trust or other projects.

## License and contributions

Original repository content and code are released under CC0 1.0 Universal.
See LICENSE and CONTRIBUTING.md. Dependencies keep their own licenses.
