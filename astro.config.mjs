import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'http://astro.web.fossee.in',
	integrations: [mdx(), sitemap()],
});
