/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'avatar-default': "url('/src/assets/images/avatars/default.png')",
            },
        },
    },
    plugins: [],
};
