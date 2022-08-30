import React, { useState, useEffect } from 'react';
import './App.scss';
import Game from './Game.tsx';
import CookiesInfo from './layouts/CookiesInfo.tsx';
import LoadingScreen from './layouts/LoadingScreen.tsx';
import { AppContext, defaultObject } from './AppContext.tsx';

function App() {
  const [openPageAnimation, setOpenPageAnimation] = useState<boolean>(true);
  const [lang, setLang] = useState(defaultObject.lang);

  const setLanguage = (lang: String) =>{
    setLang(lang);
    document.cookie = `lang=${lang}; path=/;`;
  };

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
      <AppContext.Provider
          value={{
            lang: lang,
            setLanguage: setLanguage,
          }}
      >
        {displayOpenPageAnimation}
        <Game/>
        <CookiesInfo/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
