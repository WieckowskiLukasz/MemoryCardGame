import React from 'react';

interface CardProps {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
};

export default function Card({cardID, imageIndex, imageID, imageSrc, guessed}: CardProps) {
  return (
    <div className='game__flip-card'>
      <div className='game__card'>
        <div className="game__card-front">
          
        </div>
        <div 
          className="game__card-back" 
          style={{
            backgroundImage:`url(${imageSrc})`,
            filter: `brightness(80%)`,
          }}>
        </div>
      </div>
    </div>
  )
}
