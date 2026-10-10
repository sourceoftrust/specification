# Contributing

Source of Trust is in Early Development. Contributions are welcome through
GitHub Issues and pull requests at https://github.com/sourceoftrust/specification.

For editorial changes, edit the Markdown under `src/pages/`. Describe the
problem, the proposed wording, and any supporting evidence. Keep definitions
precise, context-sensitive, and consistent across the editorial pages. The
research scope is AI Search / GEO. Distinguish provider documentation, observed
search behavior, and editorial interpretation; do not present the six assessment
dimensions as confirmed ranking factors. Provide verifiable references when
introducing external claims.

Keep the MVP static and accessible. Avoid client-side scripts and additional
features or dependencies unless they are necessary for an agreed requirement.
Run `npm ci`, `npm run build`, and `npm run verify` before submitting.
Update the publication metadata in the specification Markdown when publishing
a revised draft. Its date also controls the visible date, JSON-LD, and sitemap.

By contributing, you agree to release your original editorial and documentation
contributions under CC0 1.0 Universal, and your original website implementation
and configuration contributions under MIT. The file categories are specified in
[LICENSE](LICENSE); complete terms are in [LICENSE-CC0](LICENSE-CC0) and
[LICENSE-MIT](LICENSE-MIT). Preserve the MIT notice when reusing website code under MIT.
Earlier CC0 grants remain effective. Declare any third-party material and its
license, and contribute only material you are authorized to license.

For a specification release, synchronize the visible version, structured metadata,
package version, and CHANGELOG.md. Future release tags use `vMAJOR.MINOR.PATCH`
and identify the commit verified on the published site. Preserve existing tags.
