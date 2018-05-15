var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'svg/sprite.svg',
            render: {
                css: {
                    template: './gulp/template/sprite.css'
                }
            }
        }
    }
}

gulp.task('begainClean',function(){
     return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

gulp.task('createSprite',['begainClean'],function(){
   return gulp.src('./app/assets/images/icons/**/*.svg')
   .pipe(svgSprite(config))
   .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteCss',['createSprite'],function(){
    return gulp.src('./app/temp/sprite/css/**/*.css')
     .pipe(rename('_sprite.css'))
     .pipe(gulp.dest('./app/assets/style/moduels'));
});

gulp.task('copySprite',['copySpriteCss'],function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('endClean',['copySprite'],function(){
    return del(['./app/temp/sprite']);
});


gulp.task('icon',['begainClean','createSprite','copySpriteCss','copySprite','endClean']);



