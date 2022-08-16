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

interface imagesArray {
	Image: string;
  ID: number;
}

const images: imagesArray[] = [
  {Image: Image1, ID: 1}, {Image: Image1, ID: 1}, 
  {Image: Image2, ID: 2}, {Image: Image2, ID: 2},
  {Image: Image3, ID: 3}, {Image: Image3, ID: 3},
  {Image: Image4, ID: 4}, {Image: Image4, ID: 4},
  {Image: Image5, ID: 5}, {Image: Image5, ID: 5},
  {Image: Image6, ID: 6}, {Image: Image6, ID: 6},
  {Image: Image7, ID: 7}, {Image: Image7, ID: 7},
  {Image: Image8, ID: 8}, {Image: Image8, ID: 8},
  {Image: Image9, ID: 9}, {Image: Image9, ID: 9}, 
  {Image: Image10, ID: 10}, {Image: Image10, ID: 10},
  {Image: Image11, ID: 11}, {Image: Image11, ID: 11},
  {Image: Image12, ID: 12}, {Image: Image12, ID: 12},
];

export default images;