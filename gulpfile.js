var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			index: "index.html"
		},
		host: "192.168.56.1"
	});

	gulp.watch("sass/*.scss", ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

