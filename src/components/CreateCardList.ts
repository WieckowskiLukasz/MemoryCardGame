import {images} from '../components/Images.ts';
import {CardListInterface} from '../components/Interfaces';

export const createCardList = (numberOfCards: number) => {
  const imageList = images(numberOfCards);

  const createCardList = () =>{
    let cardList: CardListInterface[] = [];

    let oneCard: {
      cardID: number;
      imageIndex: null | number;
      imageID: null | number;
      imageSrc: string;
      guessed: boolean;
      exposed: boolean;
    };

    for(let i = 0; i < numberOfCards; i++){
      oneCard = {
        cardID: i,
        imageIndex: null,
        imageID: null,
        imageSrc: '',
        guessed: false,
        exposed: false,
      }
      cardList.push(oneCard);
    }

    return cardList;
  };

  const getRandomImage = () =>{
    let randomImageNumber: number = Math.floor(Math.random() * (imageList.length));
    return randomImageNumber;
  };

  const addImages = () =>{
    const cardList = createCardList();

    cardList.forEach(element => {
      let random: number;
      let checkNumber: boolean;
      
      do {
        random = getRandomImage();
        checkNumber = cardList.some(item => item.imageIndex === random);
      } while (checkNumber);
      
      element.imageIndex = random;
      element.imageID = imageList[random].ID;
      element.imageSrc = imageList[random].Image;
    });

    return cardList;
  };

  const shuffleCardList = (cardList: CardListInterface[]) => {
    for (let i = cardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    };

    return cardList;
  };

  return(shuffleCardList(addImages()));
};