import React from 'react';
import logo  from '../assets/logo/whiteLogo.svg';

export default function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <div className='loading-screen__logo'>
        <img src={logo}></img>
      </div>
      <div className='loading-screen__progress-bar-container'>
        <div className='loading-screen__progress-bar-bg'></div>
        <div className='loading-screen__progress-bar'></div>
      </div>
      <div className='loading-screen__copyright'>
          © 2022 Copyright: 
          <i className="lab la-github"></i>
          WieckowskiLukasz
        </div>
    </div>
  );
};
