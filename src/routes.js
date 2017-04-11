import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/Home/home';
import PlayNineGame from "./components/PlayNine/game"

export default  (
     <Route  path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/game" component={PlayNineGame} />
     </Route>
);

