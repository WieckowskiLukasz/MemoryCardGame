import React from 'react';
import {CardInterface} from '../components/Interfaces';

export default function Card({cardID, imageID, imageSrc, guessed, exposed, handleCard, gameboardBlocked, handleCardBlocked, cardBlocked}: CardInterface) {

  const flipCardClassName = guessed ? 
    'game__flip-card game__flip-card--guessed' 
    : 'game__flip-card';

  const cardClassName = exposed || guessed? 
    'game__card game__card--exposed' 
    : 'game__card';

  const cursor = gameboardBlocked || exposed ? 
    'default' 
    : 'pointer';

  const cardOnCLick = () => {
    if(!gameboardBlocked && cardBlocked !== cardID) {handleCardBlocked(cardID); handleCard(cardID, imageID)};
  };

  return (
    <div 
      className={flipCardClassName} 
      onClick={()=> cardOnCLick()}
      style={{cursor:`${cursor}`}}
    >
      <div className={cardClassName}>
        <div className='game__card-front'></div>
        <div 
          className='game__card-back' 
          style={{
            backgroundImage:`url(${imageSrc})`,
            filter: `brightness(80%)`,
          }}>
        </div>
      </div>
    </div>
  );
};
