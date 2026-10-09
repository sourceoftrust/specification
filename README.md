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
The default `wrangler.jsonc` deploys to workers.dev without modifying DNS or
custom domains. Account selection is supplied by the authenticated Wrangler
session. Static output is `dist/`, bound as `ASSETS`; missing URLs return 404.

```sh
npx wrangler login
npm run build
npx wrangler deploy --dry-run
npm run deploy
```

After reviewing the existing DNS and obtaining the owner's approval where
required, use the prepared custom-domain configuration:

```sh
npx wrangler deploy --config wrangler.domains.jsonc
```

This attaches only `sourceoftrust.org` and `www.sourceoftrust.org` to the new
Worker. The handler returns a permanent 301 from www to HTTPS on the apex,
preserving the path and query string. Cloudflare manages the custom-domain
certificate. Verify certificates, HTTP-to-HTTPS behavior, both page URLs,
canonical URLs, `robots.txt`, `sitemap.xml`, and an unknown URL after attachment.
Inspect zone-specific bot/WAF/Access settings for crawler challenges; obtain
approval before changing existing DNS, productive routes, or global security
rules. Do not modify any commercial Source of Trust or other projects.

## License and contributions

Original repository content and code are released under CC0 1.0 Universal.
See LICENSE and CONTRIBUTING.md. Dependencies keep their own licenses.
