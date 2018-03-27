var gulp = require("gulp"),
livereload = require('gulp-livereload'),
sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('**/*.scss', ['sass', 'reload']);
	gulp.watch('public/**/*.js', ['reload']);
	gulp.watch('public/**/*.html', ['reload']);
});

gulp.task('reload', function() {
	livereload.reload();
});

gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public'));
});

gulp.task('build', ['sass']);
