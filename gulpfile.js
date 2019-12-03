var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var nodemon = require("gulp-nodemon");

gulp.task("node", function() {
  nodemon({
    script: "./bin/www",
    ext: "js html",
    env: {
      NODE_ENV: "development"
    }
  });
});

gulp.task("server", ["node"], function() {
  var files = ["views/**/*.html", "views/**/*.hbs", "public/**/*.*"];

  browserSync.init(files, {
    proxy: "http://localhost:3111",
    // browser: "chrome",
    notify: false,
    port: 3112
  });

  gulp.watch(files).on("change", reload);
});
