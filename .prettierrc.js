/** @type {import("@types/prettier").Options} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss" /* Must come last */],
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.mdx", "*.md"],
			options: {
				printWidth: 80,
				/**
				 * Fenced code in these files is illustrative, not runnable -- object
				 * literal fragments, partial functions, pseudocode. Prettier parses
				 * them as whole programs and rewrites them into something else
				 * entirely (an options fragment becomes a comma expression), so it
				 * must not format embedded code here.
				 */
				embeddedLanguageFormatting: "off",
			},
		},
	],
};
