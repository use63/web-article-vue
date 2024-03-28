module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "@/assets/scss/_variable.scss";
					@import "@/assets/scss/_mixin.scss";
					`,
			},
		},
	},
};
