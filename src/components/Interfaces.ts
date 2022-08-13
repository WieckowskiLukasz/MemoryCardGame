interface CardListInterface {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
};

interface CardsInterface {
  cardList: CardListInterface[];
  handleCard: (cardID: number, imageID: number) => void;
  gameboardBlocked: boolean;
};

interface CardInterface {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
  handleCard: (cardID: number, imageID: number) => void;
  gameboardBlocked: boolean;
};

interface ScoreboardInterface {
  matchedPairs: number;
  moves: number;
  seconds: number;
  minutes: number;
  score: number;
};

interface EndGamePopUpInterface {
  endTime: false;
  score: number;
  newGame: () => void;
  handleEndGamePopUp: (value: boolean) => void;
};

interface AboutPopUpInterface {
  handleAbout: (value: boolean) => void;
};

interface HeaderInterface {
  newGame: () => void;
  handleAbout: (value: boolean) => void;
};

export{
  CardListInterface,
  CardsInterface,
  CardInterface,
  ScoreboardInterface,
  EndGamePopUpInterface,
  AboutPopUpInterface,
  HeaderInterface,
};