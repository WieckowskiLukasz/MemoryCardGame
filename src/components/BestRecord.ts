import cookies from 'js-cookies';

export const bestRecord = (score: number) =>{
  const record: number = parseInt(cookies.getItem('record'));

  if(record){
    if(score > record){
      document.cookie = `record=${score}; path=/;`;
    };
  }else{
    document.cookie = `record=${score}; path=/;`;
  };

  return parseInt(cookies.getItem('record'));
};
