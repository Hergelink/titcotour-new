import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/contact.module.css';
import phone from '../images/icons/phone-icon.png';
import email from '../images/icons/email-icon.png';
import whatsapp from '../images/icons/whatsapp-icon.png';
import fax from '../images/icons/fax-icon.png';

export default function iletisim() {
  return (
    <Layout>
      <div className={styles.contactPageWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h1>İletişim Bilgileri</h1>
            <h4>
              Güvenilir seyahat partneriniz olarak bize her şekilde
              ulaşabilirsiniz. Sizlerle konuşmaktan, tanışmaktan, çözüm
              sunmaktan ve memnun etmekten mutluluk duyarız.
            </h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactCard}>
                <img src={phone} alt='telefon' />
                <h5>
                  Telefon: <a href='tel:4447013'>444 70 13</a>
                </h5>
              </div>
              <div className={styles.contactCard}>
                <img src={email} alt='email' />
                <h5>
                  E-posta:
                  <a href='mailto:sales@titcotour.com'>sales@titcotour.com</a>
                </h5>
              </div>
              <div className={styles.contactCard}>
                <img src={whatsapp} alt='whatsapp' />
                <h5>
                  WhatsApp:
                  <a
                    href='https://wa.me/05334880111'
                    target='_blank'
                    rel='noreferrer'
                  >
                    0 533 488 01 11
                  </a>
                </h5>
              </div>
              <div className={styles.contactCard}>
                <img src={fax} alt='fax' />
                <h5>
                  Fax:
                  <span>0 216 418 30 75</span>
                </h5>
              </div>
              <div className={styles.contactCard} id={styles.address}>
                <h5>
                  Söğütlüçeşme Cad. No: 6 Kat: 2 <br /> 34714 Kadıköy / İstanbul
                </h5>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src='https://snazzymaps.com/embed/481515'
              className={styles.map}
              title='map'
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = 'Titco Tour - İletişim';
  const defaultDescription =
    'Uçak bileti, otel rezervasyonu, araç kiralama, vize ve sigorta işlemlerinden toplantı organizasyonuna kadar geniş bir hizmet yelpazesinde, 34 yıldan uzun';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charset='utf-8' />
      <meta name='robots' content='index, follow' />
      <meta name='language' content='tr' />
      <meta name='author' content='Titcotour' />
      <meta name='theme-color' content='#eff6ff' />
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://titcotour.com/' />
      <meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDescription} />
      <meta property='og:image' content='https://titcotour.com/logo.png' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://titcotour.com/' />
      <meta property='twitter:title' content={seoTitle} />
      <meta property='twitter:description' content={seoDescription} />
      <meta property='twitter:image' content='https://titcotour.com/logo.png' />
    </>
  );
}
