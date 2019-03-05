import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Characters = (props) => {
  console.log(props);
  return (
    <div>
      <em>list of characters</em>
      {props.currentCharacterArray.map(character => {
        return <li onClick={}>{character.name}</li>;
      })}
    </div>
  );
};

Characters.propTypes = {
  currentCharacterArray: PropTypes.array,
  name: PropTypes.string
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    currentCharacterArray: state.currentCharacterArray
  };
};

export default connect(mapStateToProps)(Characters);
