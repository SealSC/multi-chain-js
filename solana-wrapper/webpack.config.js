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
