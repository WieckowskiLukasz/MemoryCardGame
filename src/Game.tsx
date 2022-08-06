import React, { useState, useEffect } from 'react';
import bg from './assets/wood4.jpg';
import images from './components/Images.ts';
import Cards from './components/Cards.tsx';
import {createCardList} from './components/CreateCardList.ts';

export default function Game() {

  const [cardList, setCardList] = useState<[]>();
  const [activeFirstCard, setActiveFirstCard] = useState<[]>();
  const [activeSecondCard, setActiveSecondCard] = useState<[]>();

  useEffect(()=>{
    setCardList(createCardList);
  },[])

  const displayCardList = cardList ? 
    <Cards
      cardList={cardList}
    /> 
    : null

  return (
    <>
      <div className='game'>
        <div 
          className='background-image'
          style={{
            backgroundImage:`url(${bg})`,
            filter: `brightness(80%)`,
          }}>
        </div>
        <div className='game__card-container'>
          {displayCardList}
        </div>
      </div>
    </>
  )
}
