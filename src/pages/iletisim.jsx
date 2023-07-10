import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import * as styles from '../styles/contact.module.css';

export default function iletisim() {
  return (
    <Layout>
      <div className={styles.contactPageWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h1>İletişim Bilgileri</h1>
            <h4>
              Güvenilir seyahat partneriniz olarak bize her şekilde
              ulaşabilirsiniz. Sizlerle konuşmaktan, tanışmaktan ve çözüm
              sunmaktan mutluluk duyarız.
            </h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactCard}>
                <StaticImage
                  src='../images/phone-icon.png'
                  alt='telefon'
                  className={styles.contactIcon}
                />
                <h5>
                  Telefon: <a href='tel:4447013'>444 70 13</a>
                </h5>
              </div>
              <div className={styles.contactCard}>
                <StaticImage
                  src='../images/email-icon.png'
                  alt='email'
                  className={styles.contactIcon}
                />
                <h5>
                  E-posta:
                  <a href='mailto:sales@titcotour.com'>sales@titcotour.com</a>
                </h5>
              </div>
              <div className={styles.contactCard}>
                <StaticImage
                  src='../images/whatsapp-icon.png'
                  alt='whatsapp'
                  className={styles.contactIcon}
                />
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
                <StaticImage
                  src='../images/fax-icon.png'
                  alt='fax'
                  className={styles.contactIcon}
                />
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
  const defaultTitle = 'Biletlazım - İletişim';
  const defaultDescription = 'Uçak bileti, otel rezervasyonu, araç kiralama, vize ve sigorta işlemlerinden toplantı organizasyonuna kadar geniş bir hizmet yelpazesinde 1987 yılından itibaren hizmet gösteren kurumsal seyahat acentanız';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
    </>
  );
}
