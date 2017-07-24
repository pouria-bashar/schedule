import { combineReducers } from 'redux';
import events from './events';

const appReducer = combineReducers({
  events,
});

export default appReducer;
