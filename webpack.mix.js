let mix = require('laravel-mix');

mix.options({ publicPath: 'dist' });

mix.js('src/app.js', 'dist/');

mix.postCss('src/app.css', 'dist/', [
    require('tailwindcss'),
]);
