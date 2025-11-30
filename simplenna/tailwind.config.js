// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Se você não usa a pasta 'src/', o caminho deve ser assim:
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}', // Se tiver a pasta src
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}