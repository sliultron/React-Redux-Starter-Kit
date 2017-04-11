import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {routerReducer} from 'react-router-redux';
//import all sub redeucers here


const rootReducer = combineReducers({
    routing:routerReducer,
    user: userReducer
});


export default rootReducer;
