import React from 'react';
import { ScoreboardInterface } from './Interfaces';

export default function Scoreboard({matchedPairs, turns}:ScoreboardInterface) {
  return (
    <>
      <div className='scoreboard'>
        <div className='scoreboard__item'>
          Time: 
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
