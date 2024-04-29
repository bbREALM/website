import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bbrealm.com',
	integrations: [
		starlight({
			title: 'bbRealm',
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en',
				},
				'root': {
					label: '简体中文',
					lang: 'zh-CN',
				}
			},
			social: {
				github: 'https://github.com/RealCorebb',
			},
			sidebar: [
				{
					label: 'bbMonitor',
					autogenerate: { directory: 'bbmonitor' },
				},
			],
		}),
	],
});
