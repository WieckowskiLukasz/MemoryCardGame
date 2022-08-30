import React from 'react';
import { ScoreboardInterface } from '../components/Interfaces';
import Languages from '../layouts/Languages.tsx';

export default function Scoreboard({matchedPairs, moves, seconds, minutes, score}:ScoreboardInterface) {
  const secondsFormat  = (seconds < 10) ? `0${seconds}` : seconds;
  const minutesFormat  = (minutes < 10) ? `0${minutes}` : minutes;
  const time = `00 : ${minutesFormat} : ${secondsFormat}`;

  return (
    <>
      <div className='scoreboard'>
        <div className='scoreboard__item'>
          <div className='scoreboard__name'>
            <i className="las la-stopwatch"></i>
          </div>
          <div className='scoreboard__value stopwatch'>
            {time} 
          </div>
        </div>
        <div className='scoreboard__item'>
          <div className='scoreboard__name'>
            <Languages text={'scoreboardMoves'}/>:
          </div>
          <div className='scoreboard__value'>
            {moves}
          </div>
        </div>
        <div className='scoreboard__item'>
          <div className='scoreboard__name'>
            <Languages text={'scoreboardMatched'}/>:
          </div>
          <div className='scoreboard__value'>
            {matchedPairs}
          </div>
        </div>
        <div className='scoreboard__item'>
          <div className='scoreboard__name'>
            <Languages text={'scoreboardScore'}/>:
          </div>
          <div className='scoreboard__value score'>
            {score}
          </div>
        </div>
      </div>
    </>
  );
};
