import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { nextLyric, restartSong } from './../actions';

const CharacterDisplay = ({ dispatch, character }) => {
  // const { title, artist, songArray, arrayPosition, id } = song;
  const { name, id, status, species, type, gender, origin, location, image, episode} = character
  // const currentLine = songArray[arrayPosition];
  return (
    <div>
      <img src="{image}"></img>
      <hr/>
      <h1>{name}</h1>
      <h4>'Id': {id}</h4>
      <h4>'Status': {status} | 'Species': {species}</h4>
      <h4>'Type': {type} | 'Gender': {gender}</h4>
      <h4>'Origin': {origin} | 'Location': {location}</h4>
      <h4>'Seen on episode': {episode}</h4>
    </div>
    // <div onClick={e => {
    //   e.preventDefault();
    //   if(!(arrayPosition === songArray.length - 1)) {
    //     dispatch(nextLyric(id));
    //   } else {
    //     dispatch(restartSong(id));
    //   }
    // }}>
    //   <h1>
    //     {currentLine}
    //   </h1>
    // </div>
  );
};

// SongDisplay.propTypes = {
//   song: PropTypes.object,
//   id: PropTypes.number,
//   title: PropTypes.string,
//   artist: PropTypes.string,
//   songArray: PropTypes.array,
//   arrayPosition: PropTypes.number,
//   dispatch: PropTypes.func
// };

CharacterDisplay.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  episode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let info;
  const character = state.currentCharacterArray;
  if (!state.currentCharacterArray.isFetching) {
    info = {
      id: state.currentCharacterArray,
      name: character.name,
      id: character.id,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode
      // artist: song.artist,
      // title: song.title,
      // songArray: song.songArray,
      // arrayPosition: song.arrayPosition
    };
  } else {
    info = {
      name: '',
      id: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: '',
      location: '',
      image: '',
      episode: ''
    };
  }
  return {
    character: info
  };
};

export default connect(mapStateToProps)(CharacterDisplay);
