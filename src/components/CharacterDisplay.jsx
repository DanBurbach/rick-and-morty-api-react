import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { nextLyric, restartSong } from './../actions';

const CharacterDisplay = (props) => {
  return (
    <div>
      <hr/>
      <img src={props.image}></img>
      <h1>{props.name}</h1>
      <h4>'Id': {props.id}</h4>
      <h4>'Status': {props.status} | 'Species': {props.species}</h4>
      <h4>'Type': {props.type} | 'Gender': {props.gender}</h4>
      <h4>'Origin': {props.origin} | 'Location': {props.location}</h4>
    </div>
  );
};


export default CharacterDisplay;
