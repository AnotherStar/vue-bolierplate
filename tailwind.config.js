/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        {
            // pattern: /^(bg|text|ring|space|border|gap)-/,
        },
    ],
};
