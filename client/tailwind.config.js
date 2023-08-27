/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FE395C",
            },
            maxWidth: {
                global: "1440px",
            },
            
        },
    },
    plugins: [],
};
