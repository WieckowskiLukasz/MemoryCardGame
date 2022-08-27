import Image1 from '../assets/cards/1.webp';
import Image2 from '../assets/cards/2.webp';
import Image3 from '../assets/cards/3.webp';
import Image4 from '../assets/cards/4.webp';
import Image5 from '../assets/cards/5.webp';
import Image6 from '../assets/cards/6.webp';
import Image7 from '../assets/cards/7.webp';
import Image8 from '../assets/cards/8.webp';
import Image9 from '../assets/cards/9.webp';
import Image10 from '../assets/cards/10.webp';
import Image11 from '../assets/cards/11.webp';
import Image12 from '../assets/cards/12.webp';
import Image13 from '../assets/cards/13.webp';
import Image14 from '../assets/cards/14.webp';
import Image15 from '../assets/cards/15.webp';
import Image16 from '../assets/cards/16.webp';
import Image17 from '../assets/cards/17.webp';
import Image18 from '../assets/cards/18.webp';
import Image19 from '../assets/cards/19.webp';
import Image20 from '../assets/cards/20.webp';
import Image21 from '../assets/cards/21.webp';
import Image22 from '../assets/cards/22.webp';
import Image23 from '../assets/cards/23.webp';
import Image24 from '../assets/cards/24.webp';
import Image25 from '../assets/cards/25.webp';
import Image26 from '../assets/cards/26.webp';
import Image27 from '../assets/cards/27.webp';
import Image28 from '../assets/cards/28.webp';
import Image29 from '../assets/cards/29.webp';
import Image30 from '../assets/cards/30.webp';
import {imagesArrayInterface, imageListInterface} from '../components/Interfaces';
import { StringLiteralType } from "typescript";

export const images = (numberOfCards: number) =>{
  const imagesArray: imagesArrayInterface[] = [
    {Image: Image1, ID: 1}, {Image: Image2, ID: 2}, {Image: Image3, ID: 3},
    {Image: Image4, ID: 4}, {Image: Image5, ID: 5}, {Image: Image6, ID: 6},
    {Image: Image7, ID: 7}, {Image: Image8, ID: 8}, {Image: Image9, ID: 9},
    {Image: Image10, ID: 10}, {Image: Image11, ID: 11}, {Image: Image12, ID: 12},
    {Image: Image13, ID: 13}, {Image: Image14, ID: 14}, {Image: Image15, ID: 15},
    {Image: Image16, ID: 16}, {Image: Image17, ID: 17}, {Image: Image18, ID: 18},
    {Image: Image19, ID: 19}, {Image: Image20, ID: 20}, {Image: Image21, ID: 21},
    {Image: Image22, ID: 22}, {Image: Image23, ID: 23}, {Image: Image24, ID: 24},
    {Image: Image25, ID: 25}, {Image: Image26, ID: 26}, {Image: Image27, ID: 27},
    {Image: Image28, ID: 28}, {Image: Image29, ID: 29}, {Image: Image30, ID: 30},
  ];

  const getRandomImage = () =>{
    let randomImageNumber: number = Math.floor(Math.random() * (imagesArray.length));
    return randomImageNumber;
  };

  const createImageList = () =>{
    let imageList: imageListInterface[] = [];

    let oneImage: {
      Image: StringLiteralType | null;
      ID: number | null;
      imageIndex: number | null;
    };

    for(let i = 0; i < numberOfCards; i++){
      oneImage = {
        Image: null,
        ID: null,
        imageIndex: null,
      }
      imageList.push(oneImage);
    };

    return imageList;
  };

  const createRandomImageList = () =>{
    let counter = 0;
    let random: number;
    const imageList = createImageList();

    imageList.forEach(element => {
      let checkNumber: boolean;
      if(counter === 0){
        do {
          random = getRandomImage();
          checkNumber = imageList.some(item => item.imageIndex === random);
        } while (checkNumber);
      }
      element.imageIndex = random;
      element.ID = imagesArray[random].ID;
      element.Image = imagesArray[random].Image;
      counter++;
      if(counter === 2) counter = 0;
    });

    return imageList;
  };

  const shuffleImageList = (imageList: imageListInterface[]) => {
    for (let i = imageList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
    };
    
    return imageList;
  };

  return (shuffleImageList(createRandomImageList()));
};
