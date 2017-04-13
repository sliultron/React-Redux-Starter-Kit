import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
     vendor: path.resolve(__dirname, 'src/vendor'),
     main: path.resolve(__dirname, 'src/index'),

  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename:'[name].[hash].js'
  },
  plugins:[
    //set NODE_ENV
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),


    //extrac css
    new ExtractTextPlugin('[name].[contenthash].css'),

    //hash the files using MD5
    new WebpackMd5Hash(),

    //create a separate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),


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
  ]
};
