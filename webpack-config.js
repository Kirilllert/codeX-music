const path = require('path');

const conf = {
	entry: 'src/script.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay: true
	}
};

module.exports = conf;