import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';

export default function MobileModal() {
  return (
    <div className='mobileModal'>
      <nav>
        <ul>
          <li>
            <Link className='modalLinks' to='/'>
              Anasayfa
            </Link>
          </li>
          <li>
            <Link className='modalLinks' to='/hakkimizda'>
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link className='modalLinks' to='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link className='modalLinks' to='/iletisim'>
              İletişim
            </Link>
          </li>
        </ul>
        <div className='phoneBtnDiv'>
          <StaticImage
            src='../images/phone-icon.png'
            alt='telefon'
            className='modalPhoneIcon'
          />
          <a className='modalPhoneBtn' href='tel:4447013'>
            +444 70 13
          </a>
        </div>
      </nav>
    </div>
  );
}
