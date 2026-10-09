# Source of Trust

The Source of Trust Initiative (SoTI) maintains and publishes this reference website and
Editor's Draft v0.2.0. Editorial content is English and maintained in Markdown.
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

Three editorial pages are published:
- https://sourceoftrust.org/
- https://sourceoftrust.org/about/
- https://sourceoftrust.org/specification/source-of-trust/

`src/pages/index.md` and `src/pages/specification/source-of-trust/index.md`
contain the concept and specification content. `src/pages/about.md` documents
the initiative and Stefan Mayr’s current role as Founder and Initial Editor.
Shared publisher and entity metadata is maintained in `src/data/initiative.js`. Shared layout, styles, and metadata are under
`src/layouts/` and `src/styles/`. Future documents may be added under
`specification/`, `rfc/`, and `concepts/`; no placeholder pages are generated.

## Cloudflare deployment

See [the deployment guide](docs/deployment.md) for prerequisites, build checks,
configuration review, and publication steps. The canonical address is
https://sourceoftrust.org; www permanently redirects to HTTPS on that host.
Repository CI builds and verifies the site without deploying it.

## License and contributions

- Original definitions, specifications, and documentation: **CC0 1.0 Universal**,
  with the complete terms in [LICENSE-CC0](LICENSE-CC0).
- Original website source code and supporting configuration: **MIT**, with the
  complete terms and copyright notice in [LICENSE-MIT](LICENSE-MIT).

[LICENSE](LICENSE) specifies the file categories. Earlier CC0 releases of the
code remain available under their original terms; the existing history and
version tags are preserved. Dependencies and referenced works retain their own
licenses. See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution terms.

## Version history

See [CHANGELOG.md](CHANGELOG.md). Future specification snapshots use Git tags
`vMAJOR.MINOR.PATCH`, created on the published commit after deployment verification.
The historical `v0.1` tag is preserved.
