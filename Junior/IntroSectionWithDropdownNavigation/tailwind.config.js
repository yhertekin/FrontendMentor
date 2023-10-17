/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"almost-white": "hsl(0, 0%, 98%)",
				"medium-gray": "hsl(0, 0%, 41%)",
				"almost-black": "hsl(0, 0%, 8%)",
			},
			fontFamily: {
				epilogue: ["Epilogue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
