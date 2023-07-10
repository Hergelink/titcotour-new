import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/404.module.css';

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.errorContainer}>
        <h1>404</h1>
        <span></span>
        <h2>Aradığınız Sayfa Bulunamadı</h2>
        <div className={styles.linksDiv}>
          <Link to='/'>Ana Sayfa</Link>
          <Link to='/hakkimizda'>Hakkımızda</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/iletisim'>İletişim</Link>
        </div>
      </div>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = '404 - Aradığınız sayfa bulunamadı';
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
