const { src, dest, watch } = require('gulp');

// CSS AND SASS
const sass = require('gulp-sass')(require('sass'));

// IMAGES
const imagemin = require('gulp-imagemin');

// COMPILATION SASS
function css( done ) {
    src('src/scss/app.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(dest('build/css'))
    done();
}

// COMPILATION IMAGES
function imagenes( done ) {
    src('src/assets/images/*')
        .pipe(imagemin({optimization: 3}))
        .pipe(dest('build/img'))
    done()
}

// WATCH
function dev() {
    watch('src/scss/*.scss', css);
    watch('src/assets/images/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;