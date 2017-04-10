/*eslint-disable no-console*/


import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import chalk from 'chalk';


const port = 3000;
const app = express();


console.log(chalk.green('Start mini prod server...'));

app.use(compression());

app.use(express.static('dist'));



app.get('/', (req, res)=>{
   res.sendfile(path.join(__dirname,'../dist/index.html'));
});


app.listen(port, err =>{
     if(err){
       console.log(err);
     }
     else{
       open('http://localhost:'+port, 'chrome');
     }
});



