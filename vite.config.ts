// vite.config.js

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue({reactivityTransform: true}),
		legacy({
			targets: ['defaults', 'not IE 11']
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});
