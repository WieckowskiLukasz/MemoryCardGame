import React, { useEffect } from 'react';
import Card from '../components/Card.tsx';

interface CardsProps {
  cardList: any[];
}

export default function Cards({cardList}: CardsProps) {

  const cardsArray = cardList.map((element, index)=>
    <Card
      key={index}
      cardID = {element.cardID}
      imageID = {element.imageID}
      imageSrc = {element.imageSrc}
      quessed = {element.guessed}
      displayed = {element.displayed}
    />
  );

  return (
    <>
      {cardsArray}
    </>
  )
}
