import * as types from './../constants/ActionTypes';

// export const changeCharacter = (newSelectedCharacter) => ({
//   type: types.CHANGE_CHARACTER,
//   newSelectedCharacter
// });

export const requestCharacters = () => ({
  type: types.REQUEST_CHARACTERS,
});

export const receiveCharacters = (currentCharacterArray) => ({
  type: types.RECEIVE_CHARACTERS,
  currentCharacterArray
});

export function fetchCharacter(name) {
  return function (dispatch) {
    dispatch(requestCharacters());
    name = name.replace(' ', '_');
    return fetch('https://rickandmortyapi.com/api/character/?name=' + name).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveCharacters(json.results));
    });
  };
}
