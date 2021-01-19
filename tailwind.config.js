const colors = require('tailwindcss/colors');

module.exports = {
    prefix: 'tw-',
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            gray: colors.coolGray,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
