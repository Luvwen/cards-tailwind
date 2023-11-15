/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            minHeight: {
                '1/2': '50vh',
            },
            colors: {
                'bright-orange': 'hsl(31, 77%, 52%)',
                'dark-cyan': 'hsl(184, 100%, 22%)',
                'very-dark-cyan': 'hsl(179, 100%, 13%)',
                'very-light-gray': 'hsl(0, 0%, 95%)',
                'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
            },
            fontSize: {
                'normal-font': '15px',
            },
            fontFamily: {
                'Lexend-deca': ['Lexend Deca', 'sans-serif'],
                'Big-shoulder': ['Big Shoulders Display', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
