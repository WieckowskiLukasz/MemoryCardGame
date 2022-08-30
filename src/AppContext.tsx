import { createContext } from 'react';
import cookies from 'js-cookies';
import {defaultObjectContextInterface} from './components/Interfaces';

const cookieLang = cookies.getItem('lang');
const defaultLang = 'en';

const setLang = cookieLang ? cookieLang : defaultLang;

export const defaultObject : defaultObjectContextInterface = {
  lang: setLang,
};

export const AppContext = createContext(defaultObject);