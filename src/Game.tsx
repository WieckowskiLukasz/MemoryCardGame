import React, { useState, useEffect } from 'react';
import bg from './assets/wood4.jpg';
import Cards from './components/Cards.tsx';
import Scoreboard from './layouts/Scoreboard.tsx';
import {createCardList} from './components/CreateCardList.ts';
import {CardListInterface} from './components/Interfaces';
import Header from './layouts/Header.tsx';
import EndGamePopUp from './layouts/EndGamePopUp.tsx';
import Score from './components/Score.ts';
import {coverAllCards, coverCards, revealCard, guessedCard} from './components/HandleFlipCard.ts';

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
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if(gameActive){
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    };
  },[gameActive]);
  useEffect(()=> setCardList(createCardList),[]);
  useEffect(()=> updateTime(),[seconds]);
  useEffect(()=> checkNumberOfCards(),[numberOfSelectedCards]);
  useEffect(()=> blockGameboard(),[numberOfSelectedCards]);
  useEffect(()=> handleGameStatus(),[minutes, matchedPairs]);

  const updateTime = () =>{
    if(seconds === 60){setSeconds(0); setMinutes(seconds => seconds + 1);};
  };

  const newGame = () =>{
    setCardList(coverAllCards(cardList));
    const timer = setTimeout(resetParameters, 1200);
    return () => clearTimeout(timer);
  };

  const blockGameboard = () =>{
    if(numberOfSelectedCards > 0 && !gameboardBlocked) setGameActive(true);
  };

  const handleGameStatus = () =>{
    if(matchedPairs === 12) {setGameActive(false); setGameboardBlocked(true); setEndGame(true);};
    if(minutes >= 10) {setGameActive(false); setGameboardBlocked(true); setEndGame(true); setEndTime(false);};
  };

  const checkNumberOfCards = () =>{
    if(numberOfSelectedCards === 2) checkPairTimeout();
  };

  const checkPairTimeout = () =>{
    const timer = setTimeout(checkPair, 1200);
    return () => clearTimeout(timer);
  };

  const resetParameters = () =>{
    setCardList(createCardList);
    setActiveFirstCardImageID(null);
    setActiveFirstCardID(null);
    setActiveSecondCardImageID(null);
    setActiveSecondCardID(null);
    setNumberOfSelectedCards(0);
    setGameboardBlocked(false);
    setMatchedPairs(0);
    setTurns(0);
    setSeconds(0);
    setMinutes(0);
    setGameActive(false);
    setEndGame(false);
    setEndTime(false);
    setScore(0);
  };

  const setStateData = (cardNumber: number, imageNumber: number) =>{
    switch (numberOfSelectedCards) {
      case 0:
        setNumberOfSelectedCards(1);
        setActiveFirstCardID(cardNumber);
        setActiveFirstCardImageID(imageNumber);
          break;
      case 1:
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
        };
          break;
      case 2:
        setActiveSecondCardID(cardNumber);
        setActiveSecondCardImageID(imageNumber);
        setNumberOfSelectedCards(1);;
          break;
    };
  };

  const handleCard = (cardNumber: number, imageNumber: number) =>{
    setCardList(revealCard(cardNumber, cardList));
    setStateData(cardNumber, imageNumber);
  };
  
  const checkPair = () =>{
    if(activeFirstCardImageID === activeSecondCardImageID){
      setMatchedPairs(prevState => prevState + 1);
      setScore(prevState => prevState + Score(minutes, matchedPairs, turns));
      setCardList(guessedCard(cardList, activeFirstCardImageID));
    }else{
      setCardList(coverCards(cardList, activeFirstCardID, activeSecondCardID));
    };
    setGameboardBlocked(false);
  };

  const displayCardList = cardList ? 
    <Cards
      cardList={cardList}
      handleCard={handleCard}
      gameboardBlocked={gameboardBlocked}
    /> 
    : null

  const displayScoreboard = cardList ? 
    <Scoreboard
      matchedPairs={matchedPairs}
      turns={turns}
      seconds={seconds}
      minutes={minutes}
      score={score}
    /> 
    : null

    const endGamePopUp = endGame ? 
    <EndGamePopUp
      endTime={endTime}
      score={score}
      newGame={newGame}
    /> 
    : null

  return (
    <>
      {endGamePopUp}
      <Header
        newGame={newGame}
      />
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
  );
};
