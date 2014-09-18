// Usage:
// gulp --gulpfile gulpfile-build-getting-started.js
// Install:
// npm install del run-sequence  --savedev

// Include gulp
var gulp = require('gulp');

var del = require('del');
var removeLines = require('gulp-remove-lines');
var runSequence = require('run-sequence');

var destinationPath = './getting-started';
// Stuff to move into the getting-started folder
var paths = [
	'./base.css',
	'./scss/**/*',
	'./js/**/*', '!./js/require.conf.js',
	'./gulpfile.js',
	'./package.json',
	'./video/**/*',
];

// Clears the distribution folder before running the other tasks
gulp.task('getting-started-clean', function(done) {
	del(destinationPath, done);
});


// Move the templates into dist
gulp.task('move-stuff', function() {
	return gulp.src(paths, {base: './'})
		.pipe(gulp.dest(destinationPath));
});

// Move the templates into dist
gulp.task('move-index', function() {
	return gulp.src('./index.html', {base: './'})
		.pipe(removeLines({
			'filters': [
				/<script type="text\/javascript" data-main="js\/require.conf" src="js\/lib\/require.js"><\/script>/
			]
		}))
		.pipe(gulp.dest(destinationPath));
});



// Default Task
gulp.task('default', function(callback) {
	runSequence('getting-started-clean',
		['move-stuff', 'move-index'],
		callback
	);
});
//gulp.task('default', ['move-stuff']);