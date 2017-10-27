const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
	.js('resources/assets/js/jquery.kenburnsy.min.js', 'public/js')
	.js('resources/assets/js/jquery.velocity.min.js', 'public/js')
	.js('resources/assets/js/modernizr.custom.js', 'public/js')
	.js('resources/assets/js/plugins.js', 'public/js')
	.js('resources/assets/js/star.js', 'public/js')
	.js('resources/assets/js/init.js', 'public/js')
	.js('resources/assets/js/preload.js', 'public/js')
	.styles([
		'resources/assets/css/font-awesome.min.css',
		'resources/assets/css/style.css'
	], 'public/css/style.css')
   .sass('resources/assets/sass/app.scss', 'public/css');
   
mix.copy( 'resources/assets/images', 'public/images', false );
mix.copy( 'resources/fonts', 'public/fonts', false );