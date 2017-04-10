import './style/app.css';
import {React, ReactDOM} from '../vendor';


import App from './components/app'

const mountNode = document.querySelector('#app');

ReactDOM.render(
  <App/>,
  mountNode
);
