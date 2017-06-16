/**
 * Created by Administrator on 2017/6/14 0014.
 */
var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    webserver = require("gulp-webserver"),
    sass=require("gulp-ruby-sass"),
    uglify=require("gulp-uglify"),
    imagemin=require("gulp-imagemin"),
    pngquant=require("imagemin-pngquant"),
    rename=require("gulp-rename"),
    jshints=require("jshint"),
    jshint=require("gulp-jshint"),
    change=require("gulp-changed");
    gulp.task("webserver",function(){
        gulp.src("./dist")
            .pipe(webserver({
                livereload:true,
                open:true
        }));
    });
    //注册任务，html文件拷贝到发布目录
    gulp.task("html",function(){
        return gulp.src("src/**/*.html")
            .pipe(gulp.dest("dist/"));
    });
//注册sass任务
    gulp.task("sass",function(){
        return sass("src/sass/**/*.scss",{style:"compact"})
            .on("error",function(){
                console.log("你错了")
            })
            .pipe(gulp.dest("dist/css"));
    });

    gulp.task("imagemin",function(){
        return gulp.src("src/images/**/*.{png,jpg,gif,svg}")
            .pipe(change("dist/images"))
            .pipe(imagemin({
                progressive:true,
                svgoPlugins:[{removeViewBox:false}],
                use:[pngquant()]
            }))
            .pipe(gulp.dest("dist/images"))
    });

    gulp.task("script",function(){
        return gulp.src("src/js/**/*.js")
            .pipe(change("dist/js"))
            .pipe(uglify())
            .pipe(rename({suffix:".min"}))
            .pipe(gulp.dest("dist/js"));
    });
    gulp.task("js",function(){
        return gulp.src("src/js/**/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
    });
gulp.task("default",["sass","imagemin","js","script","html","webserver"]);
