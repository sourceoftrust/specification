# Deployment and verification — 9 October 2026

## Repository and Worker

- Public repository: https://github.com/sourceoftrust/specification
- Immutable draft snapshot: Git tag `v0.1`
- Worker: `sourceoftrust-specification`
- Published homepage: https://sourceoftrust.org/
- Published specification: https://sourceoftrust.org/specification/source-of-trust/
- Default configuration: `wrangler.jsonc`, static build in `dist/`, `ASSETS` binding.
- Custom domains are included in the default configuration.
- Worker preview: https://sourceoftrust-specification.office-c56.workers.dev/

## Checks completed

Production Astro build and Wrangler dry run succeeded. HTML contains all
editorial content, semantic landmarks, and no executable client-side scripts.
JSON-LD parses and uses Schema.org WebSite/WebPage/TechArticle types, stable IDs,
matching dates, version, license, and canonical URLs. Internal links and section
anchors were checked. The sitemap includes exactly the two editorial pages;
robots.txt allows crawling. CC0 license, contribution guidance, and issue templates
are included. CI runs only the static build and concise verification script.

Visual checks covered both pages at desktop and 390-pixel phone width, including
the specification's left-side contents on desktop and stacked contents on mobile.
No horizontal overflow was observed.

On workers.dev, curl and the browser receive 200 for the editorial pages;
robots.txt and sitemap.xml are accessible. Missing URLs return 404. The path
without the trailing slash redirects to the canonical slash form (307, platform
behavior). The server-side www and HTTP-to-HTTPS redirects preserve paths and
query strings and return 301 in direct handler checks.

Requests with Googlebot, OAI-SearchBot, GPTBot, Claude-SearchBot, and PerplexityBot
User-Agent values received 200. These are response checks, not verification of
visits from those operators. Python urllib's default client received 403 on
workers.dev. The production custom-domain checks below succeeded.

## Cloudflare inspection

Before domain attachment, the sourceoftrust.org zone was active and its dashboard showed zero DNS records.
The zone's Worker routes API returned an empty list and no custom domain for this
zone was present in the account's Worker domain list. SSL mode is Full. The
AI Crawl Control table showed blocking disabled for all listed crawlers, including
Googlebot, BingBot, OAI-SearchBot, GPTBot, Claude-SearchBot, and PerplexityBot.
The Security Rules page showed no custom, rate-limiting, or managed rules created.
No other project or existing DNS entry, route, or security setting was changed.

The existing OAuth session supports Worker deployment. DNS, SSL settings,
and ruleset API reads returned 403; corresponding inspection used the existing
Cloudflare dashboard session. Account-wide protections have not been modified.

## Domain attachment and final verification

The user explicitly approved domain attachment and specified HTTPS on the apex
as canonical. Both `sourceoftrust.org` and `www.sourceoftrust.org` are attached
to this Worker. Their routes are included in `wrangler.jsonc`; the separate
preparation configuration was removed.

Production HTTPS requests passed certificate verification. Both editorial pages,
robots.txt, and sitemap.xml returned 200; an unknown path returned 404.
Canonical URLs and JSON-LD use the apex domain. HTTP on the apex and both HTTP
and HTTPS on www return 301 to the HTTPS apex, preserving paths and query strings.
Requests using the five crawler User-Agent values listed above also returned 200
on the custom domain. Public DNS resolved both hosts; initial local DNS caching
was bypassed with curl's `--resolve` using the public answer, with normal TLS
certificate verification retained.

Astro's automatic CSS inlining initially conflicted with `style-src 'self'`.
The build now sets `inlineStylesheets: 'never'`, and the verification script
rejects inline style tags and attributes in generated HTML. The external CSS
asset returns 200. After deployment, browser checks on both production pages
confirmed applied styles and no captured console errors or warnings. The
specification also passed the 390-pixel width overflow check. The CSP remains
restricted to stylesheets from the same origin.

Final Worker version: `1d6f5f6f-f2a7-4c0e-8781-651e834331ca`.
