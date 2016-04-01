// Get all our gulp needs:
var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var scss = require( 'gulp-sass' );
var prefix = require( 'gulp-autoprefixer' );
var cssMin = require( 'gulp-minify-css' );
var browserSync = require( 'browser-sync' ).create();

gulp.task( 'css', () => {
    return gulp.src( 'src/css/main.scss' )
        .pipe( scss() )
        .pipe(prefix(['last 2 version', '> 1%', 'ie 8', 'ie 7', 'Firefox > 15'], { cascade: true }))
        .pipe(cssMin())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task( 'default', ['css'], () => {
    gulp.watch( "./src/css/**/*", ['css'] );
});
