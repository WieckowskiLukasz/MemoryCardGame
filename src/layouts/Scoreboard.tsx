import React from 'react';
import { ScoreboardInterface } from '../components/Interfaces';

export default function Scoreboard({matchedPairs, moves, seconds, minutes, score}:ScoreboardInterface) {

  const secondsFormat  = (seconds < 10) ? `0${seconds}` : seconds;
  const minutesFormat  = (minutes < 10) ? `0${minutes}` : minutes;

  const time = `00 : ${minutesFormat} : ${secondsFormat}`;

  return (
    <>
      <div className='scoreboard'>
        <div className='scoreboard__item'>
          <i className="las la-stopwatch"></i> {time} 
        </div>
        <div className='scoreboard__item moves'>
          Moves: {moves}
        </div>
        <div className='scoreboard__item matched'>
          Matched: {matchedPairs}
        </div>
        <div className='scoreboard__item'>
          Score: {score}
        </div>
      </div>
    </>
  );
};
