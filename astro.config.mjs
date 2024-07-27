import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bbrealm.com',
	integrations: [
		starlight({
			title: 'bbRealm',
			customCss: [
				'./src/styles/bb.css',
			],
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
			favicon: '/favicon.ico',
			sidebar: [
				{
					label: '📖产品说明书',
					autogenerate: { directory: 'manuals' },
				},
				{
					label: '🔍开源资源',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
});
