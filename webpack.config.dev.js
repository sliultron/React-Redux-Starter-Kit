import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  entry:  {
     reactHotReload:'react-hot-loader/patch',
     webpackHotReload: 'webpack-hot-middleware/client?reload=true',
     vendor: path.resolve(__dirname, 'src/vendor'),
     main: path.resolve(__dirname, 'src/app/index'),

  },
  target: 'web',
  output: {
    path:path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename:'[name].js'
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
  ],
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test:/\.js$/, exclude:/node_modules/, loaders:['babel-loader']},
      {test:/\.css$/, loaders:['style-loader', 'css-loader']}
    ]
  }
};
