const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	assetsDir: "assets",
	css: {
		extract: true
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'sass',
			patterns: [
				'./styles/*.sass'
			]
		}
	}
});
