/*eslint-disable no-console*/


import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import history from 'connect-history-api-fallback';

const port = 3000;
const app = express();
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler,config.devServer));


app.use(webpackHotMiddleware(compiler));


app.get('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(port, err =>{
     if(err){
       console.log(err);
     }
     else{
       open('http://localhost:'+port, 'chrome');
     }
});



