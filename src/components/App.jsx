import React from 'react';
import CharacterDisplay from './CharacterDisplay';
import Characters from './Characters';
import Header from './Header';

function App(){
  return (
    <div>
      <Header />
      <br/>
      <Characters />
      <hr/>
      <CharacterDisplay />
    </div>
  );
}

export default App;
