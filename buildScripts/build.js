/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating prod bundle...'));


webpack(webpackConfig).run((err, status)=>{

  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  return 0;
});

