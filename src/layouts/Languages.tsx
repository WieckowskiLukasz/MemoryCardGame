import React, {useContext} from 'react';
import { AppContext } from '../AppContext.tsx';
import {LanguagesInterface} from '../components/Interfaces';

export default function Languages({text}: LanguagesInterface) {
  const {lang} = useContext(AppContext);

  const textArray = {
    pl: {
      newGameButton: 'Nowa gra',
      aboutButton: 'Informacje',
      scoreboardMoves: "Ruchy",
      scoreboardMatched: 'Dopasowane',
      scoreboardScore: 'Wynik',
      gameRulesHeader: 'O zasadach gry',
      gameRulesText1: 'Masz pięć minut na dopasowanie wszystkich par kart. Im szybciej znajdziesz wszystkie pary i im mniej ruchów przy tym wykonasz, tym więcej punktów zdobędziesz.',
      gameRulesText2: 'Odliczanie czasu zaczyna się po odkryciu pierwszej karty. Powodzenia!',
      aboutTheGameHeader: 'O grze',
      aboutTheGameText: 'Gra została wykonana za pomocą React, TypeScript i Sass. Więcej informacji w repozytorium GitHub.',
      repositoryButton: 'Repozytorium',
      exitButton: 'Wyjście',
      endGameHeader: 'Gratulacje! Odnalazłeś wszystkie pary.',
      endTimeHeader: 'Niestety, czas gry się skończył!',
      yourScore: 'Twój wynik',
      yourBestScore: 'Twój najlepszy wynik',
      cookiesInfo: 'Strona korzysta z plików cookies w celu realizacji usług i zgodnie z Polityką Prywatności. Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce.',
      acceptButton: 'Akceptuję',
    },
    en: {
      newGameButton: 'New Game',
      aboutButton: "About",
      scoreboardMoves: "Moves",
      scoreboardMatched: 'Matched',
      scoreboardScore: 'Score',
      gameRulesHeader: 'Game rules',
      gameRulesText1: 'You have five minutes to find all pairs of cards. The faster you find pairs and the fewer moves you make, the more points you get.',
      gameRulesText2: 'Time begins to be measured when the first card is picked. Good luck!',
      aboutTheGameHeader: 'About the game',
      aboutTheGameText: 'The game was made with React, TypeScript and Sass. More information in the GitHub repository.',
      repositoryButton: 'Repository',
      exitButton: 'Exit',
      endGameHeader: 'Congratulations! You found all the pairs.',
      endTimeHeader: 'Unfortunately, the game time is up!',
      yourScore: 'Your score',
      yourBestScore: 'Your best score',
      cookiesInfo: 'The website uses cookies to provide services in accordance with the Privacy Policy. You can define the conditions for storing or accessing cookies in your browser.',
      acceptButton: 'Accept',
    },
  };

  return (
    <>
      {textArray[lang][text]}
    </>
  )
}
