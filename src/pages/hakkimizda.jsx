import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/about.module.css';

export default function Hakkımızda() {
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 1989;
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1>Hakkımızda</h1>
        <h2>
          {yearsOfOperation} yıldır, deneyimli ekibimizle, şirket ve kurumların
          tüm seyahat, otel, araç kiralama, vize, sigorta ve organizasyon
          ihtiyaçlarını karşılıyor, işlerini kolaylaştırıyor ve kârlılıklarını
          arttırıyoruz.
        </h2>
        <StaticImage
          src='../images/ekip.jpg'
          alt='ekibimiz'
          className={styles.crewPhoto}
        />
        <h3 className={styles.servicesTitle}>Hizmetlerimiz:</h3>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/ticket.png'
              alt='uçak bileti'
              className={styles.servicesIcons}
            />
            <h3>Uçak Bileti</h3>
          </div>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/hotel.png'
              alt='hotel'
              className={styles.servicesIcons}
            />
            <h3>Otel Rezervasyonu</h3>
          </div>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/car.png'
              alt='araba'
              className={styles.servicesIcons}
            />
            <h3>Araç Kiralama</h3>
          </div>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/passport.png'
              alt='pasaport'
              className={styles.servicesIcons}
            />
            <h3>Vize Süreç Takibi</h3>
          </div>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/insurance.png'
              alt='sigorta'
              className={styles.servicesIcons}
            />
            <h3>Seyahat Sigortası</h3>
          </div>
          <div className={styles.serviceCard}>
            <StaticImage
              src='../images/meeting-1.png'
              alt='toplantı'
              className={styles.servicesIcons}
            />
            <h3>Toplantı Organizasyonu</h3>
          </div>
        </div>
      </div>
      <div className={styles.callToActionDiv}>
        <h3>Bizimle Çalışın</h3>
        <p>
          Kurumsala çalışmak konusunda {yearsOfOperation} yıllık bir deneyime
          sahibiz. Sizin dilinizi iyi bilen ekibimizle, yaklaşan
          seyahatlerinizle ilgili tüm detayları incelikli biçimde, hızla çözer,
          sorularınıza anında yanıt verir, öneriye ihtiyacınız olduğunda en
          doğru seçenekleri sunarız.
        </p>
        <Link to='/iletisim' className={styles.callToActionBtn}>
          İletişim
        </Link>
      </div>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = 'Titco Tour - Hakkımızda';
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
