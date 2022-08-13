import {CardListInterface} from '../components/Interfaces';

export const coverAllCards = (cardList: CardListInterface[]) =>{
  const updatedCardList: CardListInterface[] = cardList.map(element => {
    element.exposed = false;
    element.guessed = false;
    return element;
  });
  
  return updatedCardList;
};

export const coverCards = (cardList: CardListInterface[], activeFirstCardID: number, activeSecondCardID: number) =>{
  const updatedCardList: CardListInterface[] = cardList.map(element => {
    if(element.cardID === activeFirstCardID || element.cardID === activeSecondCardID){
      element.exposed = false;
    };
    return element;
  });
  
  return updatedCardList;
};

export const revealCard = (cardNumber: number, cardList: CardListInterface[]) =>{
  const updatedCardList: CardListInterface[] = cardList.map(element => {
    if(element.cardID === cardNumber) element.exposed = true;
    return element;
  });

  return updatedCardList;
};

export const guessedCard = (cardList: CardListInterface[], activeFirstCardImageID: number) =>{
  const updatedCardList: CardListInterface[] = cardList.map(element => {
    if(element.imageID === activeFirstCardImageID){
      element.guessed = true;
    };
    return element;
  });

  return updatedCardList;
};
