const babel       = require("gulp-babel"),
      browserify  = require("browserify"),
      gulp        = require("gulp"),
      source      = require("vinyl-source-stream"),
      ts          = require("gulp-typescript");

const tsProject   = ts.createProject("tsconfig.json");

gulp.task("compile", function()
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

gulp.task("default", [
  "compile"
], function()
{
  return browserify("./dist/app/ren2.js", {
            "paths": [
              "dist"
            ]
          })
          .bundle()
          .pipe(source("index.js"))
          .pipe(gulp.dest("."));
});
