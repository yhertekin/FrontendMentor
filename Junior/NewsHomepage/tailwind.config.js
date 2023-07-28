/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                offwhite: "hsl(36, 100%, 99%)",
                orange: {
                    soft: "hsl(35, 77%, 62%)",
                },
                red: {
                    soft: "hsl(5, 85%, 63%)",
                },
                blue: {
                    grayish: "hsl(233, 8%, 79%)",
                    dark_grayish: "hsl(236, 13%, 42%)",
                    very_dark: "hsl(240, 100%, 5%)",
                },
            },
        },
    },
    plugins: [],
};
