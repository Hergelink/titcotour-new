import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useRef } from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';

export default function Home() {
  const ref = useRef(null);
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 1989;
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <section>
        <div className={styles.heroContainer}>
          <div className={styles.heroImageContainer}>
            <StaticImage
              src='../images/hero-1.png'
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroContextDiv}>
            <h1>Kurumsal Seyahat Acentanız</h1>
            <h3>
              Uçak bileti, otel rezervasyonu, araç kiralama, vize ve sigorta
              işlemlerinden toplantı organizasyonuna kadar geniş bir hizmet
              yelpazesinde, {yearsOfOperation} yıldan uzun süredir kurumsal
              firmalara ayrıcalıklı hizmet veriyoruz.
            </h3>
            <div className={styles.heroButtonContainer}>
              <button className={styles.servicesButon} onClick={handleScroll}>
                Hizmetlerimiz
              </button>
              <a href='tel:4447013'>Hemen Arayın</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.textContentWrapper}>
          <div className={styles.textContent}>
            <div>
              <StaticImage src='../images/hero-3.png' />
            </div>
            <div className={styles.textContentDiv}>
              <h3>
                {yearsOfOperation} yıldır işinizi kolaylaştırmak için buradayız
              </h3>
              <p>
                Kurumsala çalışmak konusunda derin bir deneyime sahibiz. Sizin
                dilinizi iyi bilen ekibimizle, yaklaşan seyahatlerinizle ilgili
                tüm detayları incelikli biçimde, hızla çözer, sorularınıza
                anında yanıt verir, öneriye ihtiyacınız olduğunda en doğru
                seçenekleri sunarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div ref={ref} className={styles.servicesContainer}>
          <h2>Hizmetlerimiz</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/ticket.png' alt='uçak bileti' className={styles.servicesIcons} />
              <h3>Uçak Bileti</h3>
              <p>
                Ekibimiz, seyahatinize uygun uçuşları sizin için bulur,
                rezervasyon, biletleme, check-in gibi işlemlerinizi sizin
                yerinize yapar. Seyahatiniz iptal olduğunda ise bize bir telefon
                açmanız yeterlidir.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/hotel.png' alt='hotel' className={styles.servicesIcons} />
              <h3>Otel Rezervasyonu</h3>
              <p>
                Ekibinizin konaklama ihtiyaçlarına göre en rahat, görüşme ve
                toplantı yerlerine rahat ulaşabilecekleri konaklama
                seçeneklerini sizin için derleyip önererek, rezervasyon sürecini
                yönetiyoruz.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/car.png' alt='araba' className={styles.servicesIcons} />
              <h3>Araç Kiralama</h3>
              <p>
                Ekibinizin ihtiyaçlarına göre ulaşımlarını hızlı, konforlu ve
                hijyenik biçimde sağlayabilmeleri için araç kiralama sürecini
                sizin adınıza yönetiyor, aracın teslim süreçlerini
                kolaylaştırıyoruz.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/passport.png' alt='pasaport' className={styles.servicesIcons} />
              <h3>Vize Süreç Takibi</h3>
              <p>
                Vize alma süreçlerin tümünü sizin adınıza üstleniyor, her
                aşamada destek oluyoruz.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/insurance.png' alt='sigorta' className={styles.servicesIcons} />
              <h3>Seyahat Sigortası</h3>
              <p>
                En uygun fiyata, kapsamı en iyi seyahat sigortalarını sizin için
                takip ediyoruz.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <StaticImage src='../images/meeting-1.png' alt='toplantı' className={styles.servicesIcons} />
              <h3>Toplantı Organizasyonu</h3>
              <p>
                Bayi toplantısı gibi kurumsal toplantılarınız için organizasyon
                hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.callToActionWrapper}>
          <div className={styles.callToAction}>
            <div>
              <StaticImage src='../images/hero-2.png' />
            </div>
            <div className={styles.callToActionContext}>
              <h3>Hizmetlerimiz Bunlarla Sınırlı Değil</h3>
              <p>
                Sizin aklınızda olan ve bizim sağlayabileceğimiz başka
                hizmetlerimiz de olabilir. İhtiyaçlarınızı en doğru şekilde
                öğrenmek ve kendimizi size daha iyi anlatabilmek adına tanışmak
                isteriz.
              </p>
              <Link to='/iletisim' className={styles.contactBtn}>
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = 'Titco Tour - Kurumsal Seyahat Acentası';
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