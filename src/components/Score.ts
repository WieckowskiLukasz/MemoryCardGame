const Score = (minutes, matchedPairs, turns) =>{
  const points: number = 10;
  let timeMultipier: number = 0;
  let matchMultipier: number = 0;
  let turnMultipier: number = 0;
  let oneMatchScore: number;

  if(minutes < 2) timeMultipier = 5;
  else if(minutes >= 2) timeMultipier = 3;
  else if(minutes >= 3) timeMultipier = 2;
  else timeMultipier = 1;

  if(matchedPairs < 3) matchMultipier = 5;
  else if(matchedPairs >= 3 && matchedPairs < 6) matchMultipier = 3;
  else if(matchedPairs >= 6 && matchedPairs < 9) matchMultipier = 2;
  else matchMultipier = 1;

  if(turns < 10) turnMultipier = 5;
  else if(turns >= 10 && turns < 15) turnMultipier = 4;
  else if(turns >= 16 && turns < 20) turnMultipier = 3;
  else if(turns >= 20 && turns < 25) turnMultipier = 2;
  else turnMultipier = 1;

  oneMatchScore = points * timeMultipier * matchMultipier * turnMultipier;

  return oneMatchScore;
};

export default Score;