import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://sourceoftrust.org', output: 'static', trailingSlash: 'always', build: { format: 'directory' } });
