import React from 'react';
import { ScoreboardInterface } from './Interfaces';

export default function Scoreboard({matchedPairs, turns, seconds, minutes}:ScoreboardInterface) {

  const secondsFormat  = (seconds < 10) ? `0${seconds}` : seconds;
  const minutesFormat  = (minutes < 10) ? `0${minutes}` : minutes;

  const time = `00: ${minutesFormat} : ${secondsFormat}`;

  return (
    <>
      <div className='scoreboard'>
        <div className='scoreboard__item'>
          {time} 
        </div>
        <div className='scoreboard__item'>
          Turns: {turns}
        </div>
        <div className='scoreboard__item'>
          Matched: {matchedPairs}
        </div>
        <div className='scoreboard__item'>
          Record: 
        </div>
      </div>
    </>
  )
}
