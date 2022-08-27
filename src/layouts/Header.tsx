import React, { useEffect, useState, useLayoutEffect} from 'react';
import logo  from '../assets/logo/whiteLogo.svg';
import {HeaderInterface} from '../components/Interfaces';

const Header = ({newGame, handleAbout}: HeaderInterface) =>{
  const [menuMobileActive, setMenuMobileActive] = useState<boolean>();
  const [pageMobile, setpageMobile] = useState<boolean>();

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

  return(
    <div className='header'>
      <div className='header__content'>
        <div>
          <img src={logo} alt='logo' className='logo'></img>
        </div>
        <nav className='navigation'>
          <ul className={menuSwitch}>
            <li 
              onClick={()=> handleNewGameButton()} 
              className={navLink}>
                New game
            </li>
            <li 
              onClick={()=> handleAboutButton()} 
              className={navLink}>
                About
            </li>
          </ul>
        </nav>
        <div 
          onClick = {handleHamburgerBtn} className='navigation__link  navigation__hamburger '>
          <i className={hamburgerIcon}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;