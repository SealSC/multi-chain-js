// var path=require('path')

// module.exports={
//   entry: path.join(__dirname, './src/wrapper/wrapper.ts'), // 入口文件
//   output: { // 指定输出选项
//     path: path.join(__dirname, './dist'), // 输出路径
//     filename: 'bundle.js' // 指定输出文件的名称
//   },
//   module:{
//     rules:[
//       { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
//       { test: /\.vue$/, use: 'vue-loader' },
//       { test: /\.js$/, use: 'babel-loader'}
//     ]
//   },
//   resolve:{
//     alias:{
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   }
// }
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/wrapper/wrapper.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: "umd",
    library: "MyLib",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
      }
    ]
  },
  plugins: []
}