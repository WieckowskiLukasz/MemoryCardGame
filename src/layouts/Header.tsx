import React, { useEffect, useState, useLayoutEffect, useContext} from 'react';
import logo  from '../assets/logo/whiteLogo.svg';
import pl from '../assets/flags/pl.svg';
import en from '../assets/flags/en.svg';
import {HeaderInterface} from '../components/Interfaces';
import Languages from '../layouts/Languages.tsx';
import { AppContext } from '../AppContext.tsx';

const Header = ({newGame, handleAbout}: HeaderInterface) =>{
  const [menuMobileActive, setMenuMobileActive] = useState<boolean>();
  const [pageMobile, setpageMobile] = useState<boolean>();
  const {lang, setLanguage} = useContext(AppContext);

  useLayoutEffect(() => {
    handleWidth();
  }, [pageMobile]);

  useEffect(() => window.addEventListener('resize', handleWidth));

  const handleWidth = () =>{
    if(window.innerWidth < 901) setpageMobile(true);
    else {setpageMobile(false); setMenuMobileActive(false)};
  };
  const handleHamburgerBtn = (e) =>{
    e.preventDefault();
    setMenuMobileActive(prev => !prev);
  };
  const handleLangBtn = () =>{
    if(lang === 'en') setLanguage('pl');
    else setLanguage('en');
  };
  
  const handleNewGameButton = () => {newGame(); setMenuMobileActive(false);};
  const handleAboutButton = () => {handleAbout(true); setMenuMobileActive(false);};

  const navLink = pageMobile ? 
    'navigation__link navigation__link--mobile' 
    : 'navigation__link ';
  const menuSwitch = pageMobile ? 
    menuMobileActive ? 
      'navigation__links  navigation__links--mobile navigation__links--active'
      : 'navigation__links  navigation__links--mobile'
    : 'navigation__links';
  const hamburgerIcon = menuMobileActive ? 
    'las la-times'
    : 'las la-bars';
  const flagIcon = lang === 'en' ? 
  pl
  : en;


  return(
    <header className='header'>
      <div className='header__content'>
        <div>
          <img src={logo} alt='logo' className='logo'></img>
        </div>
        <nav className='navigation'>
          <ul className={menuSwitch}>
            <li 
              onClick={()=> handleNewGameButton()} 
              className={navLink}>
                <Languages text={'newGameButton'}/>
            </li>
            <li 
              onClick={()=> handleAboutButton()} 
              className={navLink}>
                <Languages text={'aboutButton'}/>
            </li>
            <li 
              onClick={()=> handleLangBtn()} 
              className={navLink}>
                <img src={flagIcon} alt='flag'/>
            </li>
          </ul>
        </nav>
        <div 
          onClick = {handleHamburgerBtn} className='navigation__link  navigation__hamburger '>
          <i className={hamburgerIcon}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;