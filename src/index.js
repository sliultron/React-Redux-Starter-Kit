import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './components/root';


const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


const render =(Component, props={})=>{

 ReactDOM.render(
    <AppContainer>
        <Component {...props} />
    </AppContainer>,
    document.getElementById('root')
  );
};


render(Root, {history,store});

if (module.hot) {
  module.hot.accept('./components/root', () => {
    //const NextRoot = require('./components/root').default;
    render(Root, {history,store});
  });
}

