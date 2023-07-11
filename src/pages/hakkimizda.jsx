import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/about.module.css';

export default function Hakkımızda() {
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 1987;
  return (
    <Layout>
      <div className={styles.aboutHeroContainer}>
        <StaticImage
          src='../images/hero-plane.jpg'
          alt='Bulutların altında uçan önden çekilmiş bir uçak'
        />
        <h1 className={styles.aboutPageTitle}>Hakkımızda</h1>
      </div>
      <div className={styles.aboutContainer}>
        <h2>
          {yearsOfOperation} yıldır turizm sektöründe hizmet veren Turizm
          Acentamız, deneyimli ve profesyonel ekibimizle siz değerli
          müşterilerimize hizmet sunmaktadır. Şirket ve kurumların tüm seyahat,
          otel, araç kiralama, vize, sigorta ve organizasyon ihtiyaçlarını
          karşılayarak, işlerini kolaylaştırmak ve kârlılıklarını arttırmak için
          elimizden gelenin en iyisini yapıyoruz. Misyonumuz, müşterilerimize en
          iyi seyahat deneyimini sunmak ve seyahat süreçlerinde her türlü
          desteği sağlamaktır. Turizm dünyasındaki değişim ve gelişmelere ayak
          uydurarak, her zaman güncel ve yenilikçi hizmetler sunmayı
          hedefliyoruz.
        </h2>
        <h2>
          Vizyonumuz, müşteri memnuniyetini en üst düzeye çıkarmak ve kaliteli
          hizmetlerimizle sürekli büyümeyi sağlamaktır. Sürdürülebilir turizm
          anlayışıyla hareket ederek, doğal ve kültürel değerlerimizi koruyarak,
          tüm paydaşlarımızın beklentilerini karşılamak için çalışıyoruz.
        </h2>

        <h2>
          Siz değerli müşterilerimize, seyahatlerinizde güvenilir, kaliteli ve
          hızlı çözümler sunarak, iş süreçlerinizi verimli ve sorunsuz hale
          getirmenize yardımcı olmak için buradayız. Turizm Acentamızla,
          şirketinizin seyahat ihtiyaçlarını en üst düzeyde karşılayarak,
          çalışanlarınızın dünyayı keşfetmesine ve iş hedeflerinize ulaşmanıza
          destek oluyoruz.
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
            <h3>Vize Başvuru / Süreç Takibi</h3>
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
  const defaultTitle = 'Biletlazım - Hakkımızda';
  const defaultDescription =
    'Uçak bileti, otel rezervasyonu, araç kiralama, vize ve sigorta işlemlerinden toplantı organizasyonuna kadar geniş bir hizmet yelpazesinde 1987 yılından itibaren hizmet gösteren kurumsal seyahat acentanız';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
    </>
  );
}
