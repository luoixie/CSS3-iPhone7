var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('watch',function(){
	gulp.watch('sass/*.scss',['styles']);
});

gulp.task('styles',function(){
	gulp.src('sass/*.scss')
		.pipe(gulpSass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'));
});

gulp.task('default',['styles','watch']);