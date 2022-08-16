import React from 'react';
import './App.scss';
import Game from './Game.tsx';
import CookiesInfo from './layouts/CookiesInfo.tsx';

function App() {
  return (
    <div className="App">
      <Game/>
      <CookiesInfo/>
    </div>
  );
}

export default App;
