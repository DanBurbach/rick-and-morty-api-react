import { combineReducers } from 'redux';
import characterChangeReducer from './characterChangeReducer';
import isFetchingReducer from './isFetchingReducer';

const rootReducer = combineReducers({
  currentCharacterArray: characterChangeReducer,
  isFetching: isFetchingReducer
});

export default rootReducer;
