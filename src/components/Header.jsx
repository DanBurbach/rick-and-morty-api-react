import React from 'react';
import CharacterSearch from './CharacterSearch';
import './../assets/header.css';


function Header(){
  return (
    <div className='header'>
      <h1>Rick and Morty Character Cards</h1>
      <br />
      <CharacterSearch />
    </div>
  );
}

export default Header;
