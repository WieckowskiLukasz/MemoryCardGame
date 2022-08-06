import images from '../components/Images.ts';

export const createCardList = () =>{
  const numberOfCards: number = 20;

  let cards: any[] = [];

  let oneCard: {
    cardID: number;
    imageIndex: null | number;
    imageID: null | number;
    imageSrc: string;
    guessed: boolean;
    exposed: boolean;
  };

  const getRandomImage = () =>{
    let randomImageNumber: number = Math.floor(Math.random() * (images.length));
    return randomImageNumber;
  }

  for(let i = 0; i < numberOfCards; i++){
    oneCard = {
      cardID: i,
      imageIndex: null,
      imageID: null,
      imageSrc: '',
      quessed: false,
      exposed: true,
    }
    cards.push(oneCard);
  }

  cards.forEach(element => {
    let random: number;
    let checkNumber: boolean;
    
    do {
      random = getRandomImage();
      checkNumber = cards.some(item => item.imageIndex === random);
    } while (checkNumber);
    
    element.imageIndex = random;
    element.imageID = images[random].ID;
    element.imageSrc = images[random].Image;
  });

  console.log(cards);
  return(cards);
}