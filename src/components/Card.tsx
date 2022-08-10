import React, { useState, useEffect } from 'react';
import {CardListInterface} from '../components/Interfaces';

interface CardInterface {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
  handleCard: (cardID: number, imageID: number) => void;
  gameboardBlocked: boolean;
};

export default function Card({cardID, imageIndex, imageID, imageSrc, guessed, exposed, handleCard, gameboardBlocked}: CardInterface) {

  const flipCardClassName = guessed ? 
    'game__flip-card game__flip-card--guessed' 
    : 'game__flip-card';

  const cardClassName = exposed || guessed ? 
    'game__card game__card--exposed' 
    : 'game__card';

  const cardOnCLick = () => {
    if(!gameboardBlocked) handleCard(cardID, imageID);
  };

  return (
    <div className={flipCardClassName} onClick={()=> cardOnCLick()}>
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
  )
}
