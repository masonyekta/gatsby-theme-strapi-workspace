module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				singleQuote: true,
				trailingComma: 'es5',
				semi: false,
				tabWidth: 4,
				useTabs: true,
				bracketSpacing: true,
			},
		],
	},
}
