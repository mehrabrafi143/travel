var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
ugligy = require('gulp-uglify'),
browserSync = require('browser-sync').create();



gulp.task('previewDist',function(){
    browserSync.init({
        notify: false,
		server: {
			baseDir: "docs"
		}
	});
});


gulp.task('deleteDistFolder',['icon'],function(){
    return del('./docs');
});


gulp.task('copyGeneralFiles',['deleteDistFolder'],function(){
   var copyItems = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/scripts/**',
    '!./app/assets/style/**',
    '!./app/temp',
    '!./app/temp/**'
   ];

   return gulp.src(copyItems)
    .pipe(gulp.dest('./docs'));
});


gulp.task('optimizeImage',['deleteDistFolder'],function(){
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});


gulp.task('useminTrigger',['deleteDistFolder'],function(){
       gulp.setMaxListeners('usemin');
});

gulp.task('usemin',['css','scripts'],function(){
      return gulp.src('./app/index.html')
      .pipe(usemin({
          css: [ function(){return rev()}, function(){ return cssnano() } ],
          js: [ function(){return rev()}, function(){ return ugligy() }  ]
      }))
      .pipe(gulp.dest('./docs'));
});

gulp.task('build',['deleteDistFolder','copyGeneralFiles','optimizeImage','useminTrigger']);
