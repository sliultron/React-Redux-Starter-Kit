import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  entry: {
     vendor: path.resolve(__dirname, 'src/vendor'),
     main: path.resolve(__dirname, 'src/index'),

  },
  target: 'web',
  output: {
    path:path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename:'[name].[chunkhash].js'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    //hash the files using MD5
    new WebpackMd5Hash(),

    //extrac css

    //create a separate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    //eliminate duplicate
    new webpack.optimize.DedupePlugin(),

    //minify js
    new webpack.optimize.UglifyJsPlugin(),

    //create html file with the bundle files
    new htmlWebpackPlugin({
      template: 'src/index.html',
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject:true
    })
  ],
  module:{
    loaders:[
      {test:/\.js$/, exclude:/node_modules/, loaders:['babel-loader']},
      {test:/\.css$/, loaders:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })}
    ]
  }
};
