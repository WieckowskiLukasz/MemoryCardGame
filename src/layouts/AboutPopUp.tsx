import React from 'react';
import {AboutPopUpInterface} from '../components/Interfaces';
import Languages from '../layouts/Languages.tsx';

export default function AboutPopUp({handleAbout}: AboutPopUpInterface) {
  
  return (
    <div className='about-pop-up'>
      <div className='about-pop-up__container'>
        <div className="about-pop-up__header">
          <Languages text={'gameRulesHeader'}/>
        </div>
        <div className="about-pop-up__text">
          <Languages text={'gameRulesText1'}/>
          <br></br>
          <Languages text={'gameRulesText2'}/>
        </div>
        <div className="about-pop-up__header">
          <Languages text={'aboutTheGameHeader'}/>
        </div>
        <div className="about-pop-up__text">
          <Languages text={'aboutTheGameText'}/>
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
              <i className="las la-code-branch"></i><Languages text={'repositoryButton'}/>
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
            <i className="las la-times"></i><Languages text={'exitButton'}/>
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

