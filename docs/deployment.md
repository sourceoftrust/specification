# Deployment and verification — 9 October 2026

## Repository and Worker

- Public repository: https://github.com/sourceoftrust/specification
- Immutable draft snapshot: Git tag `v0.1`
- Worker: `sourceoftrust-specification`
- Published homepage: https://sourceoftrust-specification.office-c56.workers.dev/
- Published specification: https://sourceoftrust-specification.office-c56.workers.dev/specification/source-of-trust/
- Default configuration: `wrangler.jsonc`, static build in `dist/`, `ASSETS` binding.
- Prepared domain configuration: `wrangler.domains.jsonc`.

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
workers.dev; actual custom-domain behavior remains to be checked after attachment.

## Cloudflare inspection

The sourceoftrust.org zone is active. Its dashboard showed zero DNS records.
The zone's Worker routes API returned an empty list and no custom domain for this
zone was present in the account's Worker domain list. SSL mode is Full. The
AI Crawl Control table showed blocking disabled for all listed crawlers, including
Googlebot, BingBot, OAI-SearchBot, GPTBot, Claude-SearchBot, and PerplexityBot.
The Security Rules page showed no custom, rate-limiting, or managed rules created.
No existing project, DNS entry, route, or security setting was changed.

The existing OAuth session supports Worker deployment. DNS, SSL settings,
and ruleset API reads returned 403; corresponding inspection used the existing
Cloudflare dashboard session. Account-wide protections have not been modified.

## Pending approval and final verification

Automatic approval review rejected creation of the persistent custom-domain
bindings because explicit DNS/production-route approval was required.
The planned change attaches exactly `sourceoftrust.org` and
`www.sourceoftrust.org` to the new Worker. Cloudflare creates the DNS bindings and
managed certificates; the Worker redirects www to HTTPS on the apex.

After explicit approval, deploy the prepared domain configuration, promote its
routes into the default configuration, and verify certificate issuance, HTTPS,
HTTP and www redirects, both editorial pages, 404, robots, sitemap, canonical
metadata, and crawler accessibility on the actual domain. Preserve all other
projects and settings. The canonical domain is not yet attached.
