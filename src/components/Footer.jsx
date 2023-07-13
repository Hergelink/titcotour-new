import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footerContainer'>
        <div className='firstBlock'>
          <Link to='/'>
            <StaticImage
              src='../images/logo.png'
              alt='titcotour logo'
              className='footerLogo'
            />
          </Link>
          <div className='socials'>
            <a
              href='https://www.instagram.com/titcotour/'
              target='_blank'
              rel='noreferrer'
            >
              <StaticImage
                src='../images/instagram-icon.png'
                alt='instagram'
                className='socialIcon'
              />
            </a>
            <a
              href='https://www.facebook.com/titcotour'
              target='_blank'
              rel='noreferrer'
            >
              <StaticImage
                src='../images/facebook-icon.png'
                alt='facebook'
                className='socialIcon'
              />
            </a>
            <a
              href='https://www.linkedin.com/company/titcotour-travel-agency---istanbul/about/'
              target='_blank'
              rel='noreferrer'
            >
              <StaticImage
                src='../images/linkedin-icon.png'
                alt='linkedin'
                className='socialIcon'
              />
            </a>
          </div>
        </div>
        <div className='secondBlock'>
          <div className='footerLinks'>
            <Link to='/' className='footerLink'>
              Ana Sayfa
            </Link>
            <Link to='/hakkimizda' className='footerLink'>
              Hakkımızda
            </Link>
            <Link to='/blog' className='footerLink'>
              Blog
            </Link>
            <Link to='/iletisim' className='footerLink'>
              İletişim
            </Link>
          </div>
          <div>
            <p>© {currentYear} Biletlazım.com Bütün hakları saklıdır.</p>
          </div>
        </div>
        <div className='thirdBlock'>
          <StaticImage
            src='../images/new-titcotour-logo.png'
            alt='titcotour'
            className='titcoIcon'
          />
          <StaticImage
            src='../images/tursab.png'
            alt='tursab'
            className='tursabIcon'
          />
          <StaticImage
            src='../images/iata.png'
            alt='iata'
            className='iataIcon'
          />
        </div>
        <div className='declaration'>
          <span>Biletlazim.com bir Titcotour™ Markasıdır</span>
        </div>
      </div>
    </footer>
  );
}
