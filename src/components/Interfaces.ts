interface CardListInterface {
  cardID: number;
  imageIndex: number;
  imageID: number;
  imageSrc: string;
  guessed: boolean;
  exposed: boolean;
  handleCard: any;
};

interface ScoreboardInterface {
  matchedPairs: number;
  turns: number;
};

export{
  CardListInterface,
  ScoreboardInterface,
}