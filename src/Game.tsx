import React, { useState, useEffect } from 'react';
import bg from './assets/wood4.jpg';
import Cards from './components/Cards.tsx';
import Scoreboard from './components/Scoreboard.tsx';
import {createCardList} from './components/CreateCardList.ts';
import {CardListInterface} from './components/Interfaces';

export default function Game() {
  const [cardList, setCardList] = useState<CardListInterface[]>([]);
  const [activeFirstCardImageID, setActiveFirstCardImageID] = useState<number | null>(null);
  const [activeFirstCardID, setActiveFirstCardID] = useState<number | null>(null);
  const [activeSecondCardImageID, setActiveSecondCardImageID] = useState<number | null>(null);
  const [activeSecondCardID, setActiveSecondCardID] = useState<number | null>(null);
  const [numberOfSelectedCards, setNumberOfSelectedCards] = useState<number>(0);
  const [gameboardBlocked, setGameboardBlocked] = useState<boolean>(false);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);


  useEffect(()=>{
    setCardList(createCardList);
  },[])

  useEffect(()=>{
    if(cardList){
      setTimeout(checkCards, 1200);
    }
  },[numberOfSelectedCards])

  const revealTheCard = (cardNumber: number) =>{
    const updatedCardList: CardListInterface[] = cardList.map(element => {
      if(element.cardID === cardNumber) element.exposed = true;
      return element;
    });

    setCardList(updatedCardList);
  };

  const setStateData = (cardNumber: number, imageNumber: number) =>{
    if(numberOfSelectedCards === 0){
      setNumberOfSelectedCards(1);
      setActiveFirstCardID(cardNumber);
      setActiveFirstCardImageID(imageNumber);
    }
    else if(numberOfSelectedCards === 1){
      setNumberOfSelectedCards(2);
      setTurns(prevState => prevState + 1);
      setGameboardBlocked(true);
      if(activeSecondCardImageID !== null){
        setActiveFirstCardID(cardNumber);
        setActiveFirstCardImageID(imageNumber);
      }
      else{
        setActiveSecondCardID(cardNumber);
        setActiveSecondCardImageID(imageNumber);
      }
    }
    else if(numberOfSelectedCards === 2){
      setActiveSecondCardID(cardNumber);
      setActiveSecondCardImageID(imageNumber);
      setNumberOfSelectedCards(1);
    }
  }

  const handleCard = (cardNumber: number, imageNumber: number) =>{
    if(!gameboardBlocked){
      revealTheCard(cardNumber);
      setStateData(cardNumber, imageNumber);
    }
  };
  
  const checkCards = () =>{
    let updatedCardList: CardListInterface[];
    if(numberOfSelectedCards === 2){
      if(activeFirstCardImageID === activeSecondCardImageID){
        
        setMatchedPairs(prevState => prevState + 1);

        updatedCardList = cardList.map(element => {
          if(element.imageID === activeFirstCardImageID){
            element.guessed = true;
          }
          return element;
        });
      }else{
        updatedCardList = cardList.map(element => {
          if(element.cardID === activeFirstCardID || element.cardID === activeSecondCardID){
            element.exposed = false;
          }
          return element;
        });
      }
      setGameboardBlocked(false);
      setCardList(updatedCardList);
    }
  }

  const displayCardList = cardList ? 
    <Cards
      cardList={cardList}
      handleCard={handleCard}
    /> 
    : null

  const displayScoreboard = cardList ? 
    <Scoreboard
      matchedPairs={matchedPairs}
      turns={turns}
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
        {displayScoreboard}
        <div className='game__card-container'>
          {displayCardList}
        </div>
      </div>
    </>
  )
}
