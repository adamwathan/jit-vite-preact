module.exports = {
  // plugins: {
  //   '@tailwindcss/jit': {},
  //   autoprefixer: {},
  // },

  // Like https://github.com/postcss/postcss#webpack
  plugins: [
    require("@tailwindcss/jit"),
    require("autoprefixer")
  ],
}
