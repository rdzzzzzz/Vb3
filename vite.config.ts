import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		viteMockServe({
			// ↓解析根目录下的mock文件夹
			mockPath: './mockjs/',
			supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
			watchFiles: true, // 监视文件更改
			localEnabled: true, // 是否开启开发环境
			// mockPath: './src/mock/index.ts', // 解析刚刚user.ts的位置
			// localEnabled: true, // 是否开启开发环境
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
