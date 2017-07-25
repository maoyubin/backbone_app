// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy', function () {
    gulp.src('app/**')
        .pipe(gulp.dest('public/'));
});



gulp.task('default', ['copy']);