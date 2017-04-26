import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/Home/home';
import Game from "./components/Game/game";
import Demo from './components/Demo/demo';


export default  (
     <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/demo" component={Demo} />
     </Route>
);

