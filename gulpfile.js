const babel       = require("gulp-babel"),
      browserify  = require("browserify"),
      gulp        = require("gulp"),
      rename      = require("gulp-rename"),
      source      = require("vinyl-source-stream"),
      ts          = require("gulp-typescript");

const tsProject   = ts.createProject("tsconfig.json");

gulp.task("default", function()
{
  return tsProject.src()
          .pipe(tsProject()).js
          .pipe(babel({
            "presets": [
              "es2015"
            ]
          }))
          .pipe(gulp.dest("dist"));
});

gulp.task("demo", [
  "www"
], function()
{
  return gulp
          .src("./www.js")
          .pipe(rename("ren2.js"))
          .pipe(gulp.dest("./demo/"));

});

gulp.task("www", [
  "default"
], function()
{
  return browserify("./dist/app/www.js", {
            "paths": [
              "dist"
            ]
          })
          .bundle()
          .pipe(source("www.js"))
          .pipe(gulp.dest("."));
});
