import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as types from '../constants/index';

import schedule from './schedule';
import errors from './errors';
import stops from './stops';
import routes from './routes';
import navbar from './navbar';

const appReducer = combineReducers({
  schedule,
  navbar,
  routes,
  stops,
  errors,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === types.RESET) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
