import path from 'path';

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  entry: [
      path.resolve(__dirname, 'src/app/index')
  ],
  target: 'web',
  output: {
    path:path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename:'bundle.js'
  },
  plugins:[],
  module:{
    loaders:[
      {test:/\.js$/, exclude:/node_modules/, loaders:['babel-loader']},
      {test:/\.css$/, loaders:['style-loader', 'css-loader']}
    ]
  }
};
