import React, { useState, useEffect } from 'react';
import bg from './assets/wood.webp';
import Cards from './components/Cards.tsx';
import Scoreboard from './layouts/Scoreboard.tsx';
import {createCardList} from './components/CreateCardList.ts';
import {CardListInterface} from './components/Interfaces';
import Header from './layouts/Header.tsx';
import EndGamePopUp from './layouts/EndGamePopUp.tsx';
import About from './layouts/AboutPopUp.tsx';
import Score from './components/Score.ts';
import {bestRecord} from './components/BestRecord.ts';
import {coverAllCards, coverCards, revealCard, guessedCard} from './components/HandleFlipCard.ts';


export default function Game() {
  const [numberOfCards] = useState<number>(24);
  const [cardList, setCardList] = useState<CardListInterface[]>([]);
  const [activeFirstCardImageID, setActiveFirstCardImageID] = useState<number | null>(null);
  const [activeFirstCardID, setActiveFirstCardID] = useState<number | null>(null);
  const [activeSecondCardImageID, setActiveSecondCardImageID] = useState<number | null>(null);
  const [activeSecondCardID, setActiveSecondCardID] = useState<number | null>(null);
  const [numberOfSelectedCards, setNumberOfSelectedCards] = useState<number>(0);
  const [gameboardBlocked, setGameboardBlocked] = useState<boolean>(false);
  const [cardBlocked, setCardBlocked] = useState<number | null>(0);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [endTime, setEndTime] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [aboutActive, setAboutActive] = useState<boolean>(false);
  const [endGameActive, setEndGameActive] = useState<boolean>(false);
  const [newGameAnimation, setNewGameAnimation] = useState<boolean>(false);
 
  useEffect(() => {
    if(gameActive){
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    };
  },[gameActive]);
  useEffect(()=> setCardList(createCardList(numberOfCards)),[]);
  useEffect(()=> updateTime(),[seconds]);
  useEffect(()=> checkNumberOfCards(),[numberOfSelectedCards]);
  useEffect(()=> blockGameboard(),[numberOfSelectedCards]);
  useEffect(()=> handleGameStatus(),[minutes, matchedPairs]);
  
  const updateTime = () =>{
    if(seconds === 60){setSeconds(0); setMinutes(seconds => seconds + 1);};
  };

  const newGame = () =>{
    setEndGameActive(false);
    setNewGameAnimation(true);
    setCardList(coverAllCards(cardList));
    const timer = setTimeout(resetParameters, 1200);
    return () => clearTimeout(timer);
  };

  const blockGameboard = () =>{
    if(numberOfSelectedCards > 0 && !gameboardBlocked) setGameActive(true);
  };

  const handleGameStatus = () =>{
    if(matchedPairs === numberOfCards / 2) {setGameActive(false); setGameboardBlocked(true); setEndGameActive(true);};
    if(minutes >= 5) {setGameActive(false); setGameboardBlocked(true); setEndGameActive(true); setEndTime(true);};
    setBestScore(bestRecord(score));
  };

  const checkNumberOfCards = () => {if(numberOfSelectedCards === 2) checkPairTimeout();};

  const checkPairTimeout = () =>{
    const timer = setTimeout(checkPair, 1200);
    return () => clearTimeout(timer);
  };

  const resetParameters = () =>{
    setCardList(createCardList(numberOfCards));
    setActiveFirstCardImageID(null);
    setActiveFirstCardID(null);
    setActiveSecondCardImageID(null);
    setActiveSecondCardID(null);
    setNumberOfSelectedCards(0);
    setGameboardBlocked(false);
    setMatchedPairs(0);
    setMoves(0);
    setSeconds(0);
    setMinutes(0);
    setGameActive(false);
    setEndTime(false);
    setScore(0);
    setNewGameAnimation(false);
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
        setMoves(prevState => prevState + 1);
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
        setNumberOfSelectedCards(1);
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
      setScore(prevState => prevState + Score(minutes, moves));
      setCardList(guessedCard(cardList, activeFirstCardImageID));
    }else{
      setCardList(coverCards(cardList, activeFirstCardID, activeSecondCardID));
    };
    setGameboardBlocked(false);
    setCardBlocked(null);
  };

  const handleAbout = (value: boolean) => setAboutActive(value);
  const handleEndGamePopUp = (value: boolean) => setEndGameActive(value);
  const handleCardBlocked = (value: number) => setCardBlocked(value);
  
  const displayCardList = cardList ? 
    <Cards
      cardList={cardList}
      handleCard={handleCard}
      gameboardBlocked={gameboardBlocked}
      handleCardBlocked={handleCardBlocked}
      cardBlocked={cardBlocked}
    /> 
    : null
  const displayScoreboard = cardList ? 
    <Scoreboard
      matchedPairs={matchedPairs}
      moves={moves}
      seconds={seconds}
      minutes={minutes}
      score={score}
    /> 
    : null
  const endGamePopUp = endGameActive ? 
    <EndGamePopUp
      endTime={endTime}
      score={score}
      bestScore={bestScore}
      newGame={newGame}
      handleEndGamePopUp={handleEndGamePopUp}
    /> 
    : null
  const aboutPopUp = aboutActive ? 
    <About
      handleAbout={handleAbout}
    /> 
    : null
  const newGameDiv = newGameAnimation ?
    <><div className='new-game'></div></>
    : null;

  return (
    <>
      {newGameDiv}
      {endGamePopUp}
      {aboutPopUp}
      <Header
        newGame={newGame}
        handleAbout={handleAbout}
      />
      <div className='game'>
        {displayScoreboard}
        <div className='game__table'
        style={{
          backgroundImage:`url(${bg})`,
        }}
        >
          <div className='game__card-container'>
            {displayCardList}
          </div>
        </div>
      </div>
    </>
  );
};