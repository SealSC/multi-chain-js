module.exports = {
  presets: [
    "@vue/app"
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ["@babel/plugin-transform-runtime"]
  ],
  env: {
    test: {
      presets: ["@babel/preset-env"],
      plugins: ["istanbul"]
    }
  }
}
