var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: function(){
                    return function(sprite,render){
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg',
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

gulp.task('createCopyPng',['createSprite'],function(){
    return gulp.src('./app/temp/sprite/css/*.svg')
     .pipe(svg2png())
     .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteCss',['createSprite'],function(){
    return gulp.src('./app/temp/sprite/css/**/*.css')
     .pipe(rename('_sprite.css'))
     .pipe(gulp.dest('./app/assets/style/moduels'));
});

gulp.task('copySprite',['createCopyPng'],function(){
    return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('endClean',['copySprite'],function(){
    return del(['./app/temp/sprite']);
});


gulp.task('icon',['begainClean','createSprite','createCopyPng','copySpriteCss','copySprite','endClean']);



