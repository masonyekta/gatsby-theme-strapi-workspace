const colors = require("tailwindcss/colors");
const path = require("path");

module.exports = {
	content: [path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx}")],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				neutral: colors.neutral,
				primary: colors.sky,
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				xs: "1rem",
				sm: "2rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
