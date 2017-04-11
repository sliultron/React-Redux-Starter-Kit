import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/reducer';

const configureStore = (initialState) =>{
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware() //Add all possible middleware here like log middleware
  );
};

export default configureStore;


