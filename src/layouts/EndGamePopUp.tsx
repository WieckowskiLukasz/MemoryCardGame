import React from 'react';
import {EndGamePopUpInterface} from '../components/Interfaces';

export default function EndGamePopUp({endTime, score, newGame, handleEndGamePopUp}: EndGamePopUpInterface) {

  const header = endTime ?
    'Unfortunately, the game time is up!'
    : 'Congratulations! You found all the pairs.';

  return (
    <div className='end-game-pop-up'>
      <div className='end-game-pop-up__container'>
        <div className="end-game-pop-up__header">
          {header}
        </div>
        <div className='end-game-pop-up__score-container'>
          <div className="end-game-pop-up__score">
            <div className="end-game-pop-up__score-text">
              Your score: 
            </div>
            <div className="end-game-pop-up__score-number">
              {score}
            </div>
          </div>
          <div className="end-game-pop-up__score">
            <div className="end-game-pop-up__score-text">
              Your best score: 
            </div>
            <div className="end-game-pop-up__score-number">
               
            </div>
          </div>
        </div>
        <div className="end-game-pop-up__buttons">
          <button 
            className='end-game-pop-up__button'
            onClick={()=> newGame()}
          >
            <i className="las la-undo-alt"></i>New game
          </button>
          <button 
            className='end-game-pop-up__button'
            onClick={()=> handleEndGamePopUp(false)}
          >
            <i className="las la-times"></i>Exit
          </button>
        </div>
      </div>
    </div>
  );
};
