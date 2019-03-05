import React from 'react';
import { fetchCharacter } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CharacterSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchCharacter(input.value.trim()));
        input.value = '';
      }}>
        <input placeholder="Character Name" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

CharacterSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(CharacterSearch);
