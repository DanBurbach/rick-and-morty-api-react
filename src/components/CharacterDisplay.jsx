import React from 'react';
import PropTypes from 'prop-types';
import './../assets/style.css';

const CharacterDisplay = (props) => {
  return (
    <div>
      <ul className="cards">
        <li className="card">
          <img src={props.image}></img>
          <h1>{props.name}</h1>
          <p>Status: {props.status} | Species: {props.species}</p>
          <p>Type: {props.type} | Gender: {props.gender}</p>
          <p>Origin: {props.origin}</p>
          <p>Location: {props.location}</p>
        </li>
      </ul>
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
