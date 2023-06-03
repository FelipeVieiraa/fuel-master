module.exports = {
	'./src/**/*.(ts|tsx)': () => 'tsc --noEmit',

	'./src/**/*.(tsx|ts)': (filenames) => [
		`eslint --fix ${filenames.join(' ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],

	'*./**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
