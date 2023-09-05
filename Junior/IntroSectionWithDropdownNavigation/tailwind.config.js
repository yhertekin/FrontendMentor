/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "c-white": "hsl(0, 0%, 98%)",
                "c-gray": "hsl(0, 0%, 41%)",
                "c-black": "hsl(0, 0%, 8%)",
            },
            fontFamily: {
                epilogue: ["Epilogue", "sans-serif"],
            },
        },
    },
    plugins: [],
};
