module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: false,
  assetsDir: "static",

  // use the full build with in-browser compiler?

  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // runtimeCompiler: false,

  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},

  configureWebpack: () => {},

  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },

  // use thread-loader for babel & TS in production build

  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,

  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  //dll: false,

  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  devServer: {
    open: process.platform === "darwin",

    host: "0.0.0.0",

    port: 8080,

    https: false,

    hotOnly: false,
    proxy:null,
   // proxy: {
    //   "/get":{
    //     target:"https://otgschain.otgs.finance",
    //     changeOrigin:true,
    //     secure: true,
    //     pathRewrite:{
    //          '^/get':''
    //     }
    // }
    //},

    before: app => {}
  },

  pluginOptions: {
    // ...
  }
};
