/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "hsl(246, 80%, 60%)",
                light_red: "hsl(15, 100%, 70%)",
                soft_blue: "hsl(195, 74%, 62%)",
                light_red_study: "hsl(348, 100%, 68%)",
                lime_green: "hsl(145, 58%, 55%)",
                violet: "hsl(264, 64%, 52%)",
                soft_orange: "hsl(43, 84%, 65%)",
                very_dark_blue: "hsl(226, 43%, 10%)",
                dark_blue: "hsl(235, 46%, 20%)",
                desaturated_blue: "hsl(235, 45%, 61%)",
                pale_blue: "hsl(236, 100%, 87%)",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
