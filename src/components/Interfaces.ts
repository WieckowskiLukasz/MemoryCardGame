interface CardListInterface {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
};

interface ScoreboardInterface {
  matchedPairs: number;
  turns: number;
  seconds: number;
  minutes: number;
};

export{
  CardListInterface,
  ScoreboardInterface,
}