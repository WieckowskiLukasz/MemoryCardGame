import React, { useEffect } from 'react';
import Card from '../components/Card.tsx';

interface CardsProps {
  cardList: any[];
  handleCard: any;
}

export default function Cards({cardList, handleCard}) {

  const cardsArray = cardList.map((element, index)=>
    <Card
      key={index}
      cardID = {element.cardID}
      imageID = {element.imageID}
      imageSrc = {element.imageSrc}
      guessed = {element.guessed}
      exposed = {element.exposed}
      handleCard = {handleCard}
    />
  );


  return (
    <>
      {cardsArray}
    </>
  )
}
