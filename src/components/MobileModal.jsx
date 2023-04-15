import React from 'react';
import { Link } from 'gatsby';
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
            <Link className='modalLinks' to='/about'>
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
      </nav>
    </div>
  );
}
