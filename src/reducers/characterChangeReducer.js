import constants from './../constants';
const { initialState, types } = constants;

const characterChangeReducer = (state = initialState.currentCharacterArray, action) => {

  switch (action.type) {

  case types.RECEIVE_CHARACTERS:
    return action.currentCharacterArray;
  default:
    return state;
  }
};

export default characterChangeReducer;
