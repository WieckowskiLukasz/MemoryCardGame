import React from 'react';
import './App.scss';
import Game from './Game.tsx';
import Header from './layouts/Header.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Game></Game>
    </div>
  );
}

export default App;
