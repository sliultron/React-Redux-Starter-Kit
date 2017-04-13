/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import webpack from 'webpack';
import basicConfig from '../webpack.config.basic';
import prodConfig from '../webpack.config.prod';
import webpackMerge from 'webpack-merge';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating prod bundle...'));

const config =webpackMerge(basicConfig, prodConfig);

webpack(config).run((err, status)=>{

  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  console.log(chalk.green(status));
  return 0;
});

