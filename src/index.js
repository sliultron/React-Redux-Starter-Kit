import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Root from './components/root';
import { syncHistoryWithStore } from 'react-router-redux';



const store = configureStore();


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <AppContainer >
    <Root history={history} store={store} />
  </AppContainer>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NewRoot = require('./components/root').default;
    ReactDOM.render(
      <AppContainer>
          <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
