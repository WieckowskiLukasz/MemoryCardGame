import React from 'react';
import Card from '../components/Card.tsx';
import {CardsInterface} from '../components/Interfaces';

export default function Cards({cardList, handleCard, gameboardBlocked, handleCardBlocked, cardBlocked}:CardsInterface) {

  const cardsArray = cardList.map((element, index)=>
    <Card
      key={index}
      cardID = {element.cardID}
      imageID = {element.imageID}
      imageSrc = {element.imageSrc}
      guessed = {element.guessed}
      exposed = {element.exposed}
      handleCard = {handleCard}
      gameboardBlocked = {gameboardBlocked}
      handleCardBlocked = {handleCardBlocked}
      cardBlocked = {cardBlocked}
    />
  );

  return (
    <>
      {cardsArray}
    </>
  );
};
