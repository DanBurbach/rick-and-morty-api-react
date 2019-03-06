import constants from './../constants';
const { initialState, types } = constants;

const selectCharacterReducer = (state = initialState.selectedCharacter, action) => {
  switch (action.type) {

  case types.SELECT_CHARACTER:
    return action.selectedCharacter;
  default:
    return state;
  }
};

export default selectCharacterReducer;
