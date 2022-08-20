const Score = (minutes: number, moves: number): number =>{
  const points: number = 100;
  let timeMultipier: number;
  let moveMultipier: number;
  let oneMatchScore: number;

  if(minutes < 1) timeMultipier = 5;
  else if(minutes >= 1) timeMultipier = 4;
  else if(minutes >= 2) timeMultipier = 3;
  else if(minutes >= 3) timeMultipier = 2;
  else timeMultipier = 1;

  if(moves < 10) moveMultipier = 5;
  else if(moves >= 10 && moves < 16) moveMultipier = 4;
  else if(moves >= 16 && moves < 20) moveMultipier = 3;
  else if(moves >= 20 && moves < 26) moveMultipier = 2;
  else moveMultipier = 1;

  oneMatchScore = points * timeMultipier  * moveMultipier;

  return oneMatchScore;
};

export default Score;