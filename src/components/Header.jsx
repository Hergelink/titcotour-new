import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import MobileModal from './MobileModal';

export default function Header() {
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 1987;
  const [menuState, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!menuState);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleMobileMenu();
    }
  };

  return (
    <header>
      <div className='headerContainer'>
        <div>
          <Link to='/'>
            <StaticImage
              src='../images/logo.png'
              alt='logo'
              className='headerLogo'
            />
          </Link>
          <span className='yearsOfOperation'>{yearsOfOperation}. Yıl</span>
        </div>

        <div className='desktopMenu'>
          <nav>
            <Link className='desktopLinks' to='/'>
              Anasayfa
            </Link>
            <Link className='desktopLinks' to='/hakkimizda'>
              Hakkımızda
            </Link>
            <Link className='desktopLinks' to='/blog'>
              Blog
            </Link>
            <Link className='desktopLinks' to='/iletisim'>
              İletişim
            </Link>
          </nav>
        </div>
        <button
          className='mobileMenuBtn'
          onClick={toggleMobileMenu}
          role='button'
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label='Mobil menüyü açın'
        >
          <span className='hamburger'></span>
          <span className='hamburger'></span>
          <span className='hamburger'></span>
        </button>
        <a className='phoneBtn' href='tel:4447013'>
          +444 70 13
        </a>
      </div>

      {menuState && <MobileModal />}
    </header>
  );
}
