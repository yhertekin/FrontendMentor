/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 98%)",
				gray: "hsl(0, 0%, 41%)",
				black: "hsl(0, 0%, 8%)",
			},
			fontFamily: {
				epilogue: ["Epilogue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
