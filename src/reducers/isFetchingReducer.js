import constants from './../constants';
const { initialState, types } = constants;

const characterChangeReducer = (state = initialState.currentCharacterArray, action) => {
  switch (action.type) {

  case types.REQUEST_CHARACTERS:
    const newStateSlice = {
      isFetching: true
    };
    return newStateSlice;
  default:
    return state;
  }
};

export default characterChangeReducer;
