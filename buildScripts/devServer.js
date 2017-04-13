/*eslint-disable no-console*/
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import basicConfig from '../webpack.config.basic';
import devConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import history from 'connect-history-api-fallback';

const port = 3000;
const app = express();
const config =webpackMerge(basicConfig, devConfig);
const compiler = webpack(config);


//set up middlewares
app.use(webpackDevMiddleware(compiler,config.devServer));
app.use(webpackHotMiddleware(compiler));


//handle all the request
app.get('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});


//start the server
app.listen(port, err =>{
     if(err){
       console.log(err);
     }
     else{
       open('http://localhost:'+port, 'chrome');
     }
});



