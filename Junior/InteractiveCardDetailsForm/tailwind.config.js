/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Space Grotesk", "sans-serif"],
            },
            colors: {
                violet: {
                    100: "hsl(270, 3%, 87%)",
                    200: "hsl(279, 6%, 55%)",
                    300: "hsl(249, 99%, 64%)",
                    400: "hsl(278, 94%, 30%)",
                    500: "hsl(278, 68%, 11%)",
                },
                red: {
                    100: "hsl(0, 100%, 66%)",
                },
            },
            backgroundImage: {
                "card-desktop": "url('/assets/images/bg-main-desktop.png')",
                "card-mobile": "url('/assets/images/bg-main-mobile.png')",
                "card-front": "url('/assets/images/bg-card-front.png')",
                "card-back": "url('/assets/images/bg-card-back.png')",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};
