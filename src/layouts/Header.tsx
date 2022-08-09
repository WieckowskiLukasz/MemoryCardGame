import React, { useEffect, useState} from 'react';
import logo  from '../assets/logo/whiteLogo.svg';

const Header = () =>{
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const [pageMobile, setpageMobile] = useState(false);

  useEffect(() => {
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
 
  const handleNavLinkClick = () => {setMenuMobileActive(false);};

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
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                New game
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
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