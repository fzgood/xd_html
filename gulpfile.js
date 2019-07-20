const gulp = require("gulp")
const sass = require("gulp-sass")
const watch = require("gulp-watch")

gulp.task('build', function () {
    gulp.src(['sass/theme_default.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    watch('sass/**/*.scss', gulp.series('build'));
})