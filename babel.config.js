// eslint-disable-next-line no-undef
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: [
		'inline-react-svg',
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				root: ['./'],
				alias: {
					'~public': ['./public'],
					'~apiClient': ['./src/apiClient'],
					'~config': ['./src/config'],
					'~components': ['./src/components'],
					'~pages': ['./src/pages'],
					'~utils': ['./src/utils'],
					'~hooks': ['./src/hooks'],
					'~types': ['./src/types'],
					'~graphql': ['./src/graphql'],
					'~simulator': ['./src/simulator'],
					'~swagger': ['./src/swagger'],
					'~db': ['./src/db'],
					'~server': ['./src/server'],
				},
			},
		],
		['@babel/plugin-proposal-decorators', { legacy: true, loose: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		['@babel/plugin-proposal-nullish-coalescing-operator'],
	],
};
