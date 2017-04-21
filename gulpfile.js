var gulp = require("gulp");
var livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('client/**/*.css', ['reload']);
	gulp.watch('**/*.js', ['reload']);
	gulp.watch('client/**/*.html', ['reload']);
});

gulp.task('reload', function() {
	livereload.reload();
}); 