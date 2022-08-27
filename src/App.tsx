import React, { useState, useEffect } from 'react';
import './App.scss';
import Game from './Game.tsx';
import CookiesInfo from './layouts/CookiesInfo.tsx';
import LoadingScreen from './layouts/LoadingScreen.tsx';

function App() {
  const [openPageAnimation, setOpenPageAnimation] = useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenPageAnimation(false);
    }, 3500);
    return () => clearInterval(interval);
  },);

  const displayOpenPageAnimation = openPageAnimation ?
    <LoadingScreen/>
    : null;

  return (
    <div className="App">
      {displayOpenPageAnimation}
      <Game/>
      <CookiesInfo/>
    </div>
  );
}

export default App;
