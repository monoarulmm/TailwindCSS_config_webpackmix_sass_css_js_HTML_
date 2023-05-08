// webpack.mix.js
let mix = require("laravel-mix");
// mix.js('src/app.js', 'dist').setPublicPath('dist');
mix
  .sass("./src/scss/tailwind.scss", "public/css")
  .sass("./src/scss/main.scss", "public/css")
  .js("./src/js/main.js", "public/js")
  .browserSync({
    server: "./",
    ignore: ["node_modules", "dist"],
    ghostMode: true,
    files: ["public/**/*", "src/**/*", "index.html"],
  });
