var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    'v-weui': './components/index.js'
  },

  output: {
    filename: './lib/[name].js',
    library: 'VWeui',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
      {test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]'}
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = module.exports.output.filename.replace(/\.js$/, '.min.js');
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,        //去掉注释
      beautify: false, // 最紧凑的输出
      compress: {
        warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
        drop_console: true,  // 删除所有的 `console` 语句
        collapse_vars: true, // 内嵌定义了但是只用到一次的变量
        reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
      }
    })
  ];
}
