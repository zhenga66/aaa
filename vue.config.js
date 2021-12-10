module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'views': '@/views',

            }
        }
    },

		 // publicPath: "./",
		 publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
		 // publicPath: process.env.NODE_ENV === 'production' ? './' : '/'

		 
		 // outputDir: 'dist',
		 // assetsDir: 'static',
		// dev:{
		// 	assetsSubDirectory: 'static',
		// 	assetsPublicPath: './',
		// },
		// build: {
			// index: path.resolve(__dirname, '../dist/index.html'),
			// assetsRoot: path.resolve(__dirname, '../dist'),
			// assetsSubDirectory: 'static',
			// assetsPublicPath: './',
		// }
}