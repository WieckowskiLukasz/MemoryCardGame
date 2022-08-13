import React from 'react';
import {AboutPopUpInterface} from '../components/Interfaces';

export default function AboutPopUp({handleAbout}: AboutPopUpInterface) {
  
  return (
    <div className='about-pop-up'>
      <div className='about-pop-up__container'>
        <div className="about-pop-up__header">
          Game rules
        </div>
        <div className="about-pop-up__text">
          You have five minutes to find all pairs of cards. The faster you find pairs and the fewer moves you make, the more points you get.
          <br></br> 
          Time begins to be measured when the first card is picked. Good luck!
        </div>
        <div className="about-pop-up__header">
          About the game
        </div>
        <div className="about-pop-up__text">
          The game was made with React, TypeScript and Saas. More information in the GitHub repository.
        </div>
        <div className="about-pop-up__buttons">
          <button 
            className='about-pop-up__button'
          >
            <a 
            href='https://github.com/WieckowskiLukasz/MemoryCardGame'
            target='_blank'
            rel='noreferrer'
            >
              <i className="las la-code-branch"></i>Repository
            </a>
          </button>
          <button 
            className='about-pop-up__button'
          >
            <a 
              href='https://github.com/WieckowskiLukasz'
              target='_blank'
              rel='noreferrer'
            >
              <i className="lab la-github"></i>WieckowskiLukasz
            </a>
          </button>
          <button 
            className='about-pop-up__button'
            onClick={()=> handleAbout(false)}
          >
            <i className="las la-times"></i>Exit
          </button>
        </div>
        <div className='about-pop-up__copyright'>
          © 2022 Copyright: 
          <a 
            href='https://github.com/WieckowskiLukasz'
            target='_blank'
            rel='noreferrer'
          >
          <i className="lab la-github"></i>WieckowskiLukasz
          </a>
        </div>
      </div>
    </div>
  );
};

