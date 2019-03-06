import constants from './../constants';
const { initialState, types } = constants;

const characterChangeReducer = (state = initialState.isFetching, action) => {
  switch (action.type) {

  case types.REQUEST_CHARACTERS:
    return false;
  default:
    return state;
  }
};

export default characterChangeReducer;
