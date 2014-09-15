// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var print = require('gulp-print');

var module_sass_path = [
	'./modules/**/*.scss',
	'./pages/**/*.scss'
];

//module_sass_path = ['**/*.scss', '!./node_modules/**'];

// Compile Our module Sass
gulp.task('module-sass', function() {
	return gulp.src(module_sass_path, {base: './'})
		.pipe(print())
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./'))
		.pipe(print());
});

// Compile Our module Sass
gulp.task('base-sass', function() {
	return gulp.src('./scss/base.scss')
		.pipe(print())
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./'))
		.pipe(print());
});


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(module_sass_path, ['module-sass']);

});

// Default Task
gulp.task('default', ['base-sass', 'module-sass', 'watch']);