import React from 'react';
import PropTypes from 'prop-types';

const CharacterDisplay = (props) => {
  return (
    <div>
      <hr/>
      <img src={props.image}></img>
      <h1>{props.name}</h1>
      <h4>Status: {props.status} | Species: {props.species}</h4>
      <h4>Type: {props.type} | Gender: {props.gender}</h4>
      <h4>Origin: {props.origin} | Location: {props.location}</h4>
    </div>
  );
};

CharacterDisplay.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};

export default CharacterDisplay;
