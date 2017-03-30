var gulp = require("gulp");
var livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('*.css', ['reload']);
	gulp.watch('*.js', ['reload']);
	gulp.watch('*.html', ['reload']);
});

// gulp.task('build-css', function() {
// 	return gulp.src('*.css')
// 		.pipe(gulp.dest(''))
// 		.pipe(livereload());
// });

gulp.task('reload', function() {
	livereload.reload();
});