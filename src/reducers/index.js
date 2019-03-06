import { combineReducers } from 'redux';
import characterChangeReducer from './characterChangeReducer';
import isFetchingReducer from './isFetchingReducer';
import selectCharacterReducer from './selectCharacterReducer';

const rootReducer = combineReducers({
  currentCharacterArray: characterChangeReducer,
  isFetching: isFetchingReducer,
  selectedCharacter: selectCharacterReducer
});

export default rootReducer;
