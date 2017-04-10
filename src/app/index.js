import './style/app.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute ,browserHistory} from 'react-router'
import { AppContainer } from 'react-hot-loader';

import routes from "./routes";

render(
  <AppContainer >
    <Router history={browserHistory}  routes={routes} />
  </AppContainer>,
  document.getElementById('app')
);

