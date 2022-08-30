import { StringLiteralType } from "typescript";

interface CardListInterface {
  cardID: number;
  imageIndex: null | number;
  imageID: null | number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
};

interface CardsInterface {
  cardList: CardListInterface[];
  handleCard: (cardID: number, imageID: number) => void;
  gameboardBlocked: boolean;
  handleCardBlocked: (cardID: number) => void;
  cardBlocked: number;
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
  handleCardBlocked: (cardID: number) => void;
  cardBlocked: number;
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
  bestScore: number;
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

interface imagesArrayInterface {
  Image: StringLiteralType;
  ID: number;
};

interface imageListInterface {
  Image: StringLiteralType | null;
  ID: number | null;
  imageIndex: number | null;
};

interface LanguagesInterface {
  text: string;
};

interface defaultObjectContextInterface{ 
  lang: string;
};

export{
  CardListInterface,
  CardsInterface,
  CardInterface,
  ScoreboardInterface,
  EndGamePopUpInterface,
  AboutPopUpInterface,
  HeaderInterface,
  imagesArrayInterface,
  imageListInterface,
  LanguagesInterface,
  defaultObjectContextInterface,
};