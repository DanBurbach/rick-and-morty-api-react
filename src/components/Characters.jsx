import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCharacter } from './../actions';
import CharacterDisplay from './CharacterDisplay';


const Characters = (props) => {
  return (
    <div>
      <em>list of characters</em>
      {props.currentCharacterArray.map(character => {
        return <li onClick={()=> props.dispatch(selectCharacter(character))} key={character.id}>{character.name}</li>;
      })}
      {props.selectedCharacter ? <CharacterDisplay name={props.selectedCharacter.name} status={props.selectedCharacter.status} species={props.selectedCharacter.species} type={props.selectedCharacter.type} gender={props.selectedCharacter.gender} origin={props.selectedCharacter.origin.name} location={props.selectedCharacter.location.name} image={props.selectedCharacter.image}/> : null}
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
