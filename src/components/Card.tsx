import React, { useState, useEffect } from 'react';
import {CardListInterface} from '../components/Interfaces';

interface CardProps {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
  handleCard: any;
};

export default function Card({cardID, imageIndex, imageID, imageSrc, guessed, exposed, handleCard}: CardListInterface) {

  const flipCardClassName = guessed ? 
    'game__flip-card game__flip-card--guessed' 
    : 'game__flip-card';

  const cardClassName = exposed ? 
    'game__card game__card--exposed' 
    : 'game__card';


  return (
    <div className={flipCardClassName} onClick={()=> handleCard(cardID, imageID)}>
      <div className={cardClassName}>
        <div className='game__card-front'>
          
        </div>
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
