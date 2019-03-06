import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCharacter } from './../actions';
import CharacterDisplay from './CharacterDisplay';


const Characters = ({currentCharacterArray, selectedCharacter, dispatch}) => {
  return (
    <div>
      <em>List of characters</em>
      {currentCharacterArray.map(character => {
        return <li onClick={()=> dispatch(selectCharacter(character))} key={character.id}>{character.name}</li>;
      })}
      {selectedCharacter ? <CharacterDisplay name={selectedCharacter.name} status={selectedCharacter.status} species={selectedCharacter.species} type={selectedCharacter.type} gender={selectedCharacter.gender} origin={selectedCharacter.origin.name} location={selectedCharacter.location.name} image={selectedCharacter.image}/> : null}
    </div>
  );
};

Characters.propTypes = {
  currentCharacterArray: PropTypes.arrayOf(Object),
  selectedCharacter: PropTypes.Object,
  name: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentCharacterArray: state.currentCharacterArray,
    selectedCharacter: state.selectedCharacter
  };
};

export default connect(mapStateToProps)(Characters);
