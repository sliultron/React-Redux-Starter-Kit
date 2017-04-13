import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
  entry:  {
     reactHotReloadPatch:'react-hot-loader/patch',
     __webpack_public_path__:'./src/webpack-public-path',
     webpackHotReload: 'webpack-hot-middleware/client?reload=true',
     webpackOnlyDev: 'webpack/hot/only-dev-server',
     vendor: path.resolve(__dirname, 'src/vendor'),
     main: path.resolve(__dirname, 'src/index'),
  },
  devServer:{
    hot:true,
    publicPath: '/',
    historyApiFallback:true
  },
  plugins:[
      //create a separate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
     //create html file with the bundle files
    new htmlWebpackPlugin({
      template: 'src/index.html',
      inject:true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
