const path = require('path');

const dir = path.resolve(__dirname, 'lib');

module.exports = {
	title: 'React Style Guide Example',
	sections: [
		{
			name: 'Components',
			components: './lib/components/**/[A-Z]*.js',
		},
		{
			name: 'Documentation',
			sections: [
				{
					name: 'First File',
					content: 'docs/One.md',
				},
				{
					name: 'Second File',
					content: 'docs/Two.md',
				},
			],
		},
	],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					include: dir,
					loader: 'babel',
				},
				{
					test: /\.css$/,
					include: dir,
					loader: 'style!css?modules&importLoaders=1',
				},
				{
					test: /\.json$/,
					include: path.dirname(require.resolve('dog-names/package.json')),
					loader: 'json',
				},
			],
		},
	},
};
