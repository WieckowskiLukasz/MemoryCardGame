import React from 'react';
import {EndGamePopUpInterface} from '../components/Interfaces';
import Languages from '../layouts/Languages.tsx';

export default function EndGamePopUp({endTime, score, bestScore, newGame, handleEndGamePopUp}: EndGamePopUpInterface) {

  const header = endTime ?
    <Languages text={'endTimeHeader'}/>
    : <Languages text={'endGameHeader'}/>;

  return (
    <div className='end-game-pop-up'>
      <div className='end-game-pop-up__container'>
        <div className="end-game-pop-up__header">
          {header}
        </div>
        <div className='end-game-pop-up__score-container'>
          <div className="end-game-pop-up__score">
            <div className="end-game-pop-up__score-text">
              <Languages text={'yourScore'}/>: 
            </div>
            <div className="end-game-pop-up__score-number">
              {score}
            </div>
          </div>
          <div className="end-game-pop-up__score">
            <div className="end-game-pop-up__score-text">
              <Languages text={'yourBestScore'}/>:
            </div>
            <div className="end-game-pop-up__score-number">
               {bestScore}
            </div>
          </div>
        </div>
        <div className="end-game-pop-up__buttons">
          <button 
            className='end-game-pop-up__button'
            onClick={()=> newGame()}
          >
            <i className="las la-undo-alt"></i><Languages text={'newGameButton'}/>
          </button>
          <button 
            className='end-game-pop-up__button'
            onClick={()=> handleEndGamePopUp(false)}
          >
            <i className="las la-times"></i><Languages text={'exitButton'}/>
          </button>
        </div>
      </div>
    </div>
  );
};
