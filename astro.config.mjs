import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bbrealm.com',
	integrations: [
		starlight({
			title: 'bbRealm',
			logo: {
				light: './src/assets/bbRealm_Bar.webp',
				dark: './src/assets/bbRealm_Bar_White_Color.webp',
				replacesTitle: true,
			},
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
					label: '介绍', 
					translations: {
						'en': 'Introduction',
					},
					link: 'intro/welcome'
				},
				{
					label: '📖产品说明书',
					translations: {
						'en': '📖Product Manual',
					},
					items: [
						{
							label: '电脑性能显示器bbMonitor',
							translations: {
								'en': 'bbMonitor Performance Monitor',
							},
							autogenerate: { directory: 'manuals/bbMonitor' },
						}
					]
				},
				{
					label: '🔍开源资源',
					translations: {
						'en': '🔍Open Source Resources',
					},
					autogenerate: { directory: 'tutorials' },
				},
			]
		}),
	],
});
