import React from 'react';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sayfa bulunamadi</p>
      </div>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = '404 - Aradığınız sayfa bulunamadı';
  const defaultDescription =
    'Uçak bileti, otel rezervasyonu, araç kiralama, vize ve sigorta işlemlerinden toplantı organizasyonuna kadar geniş bir hizmet yelpazesinde, 34 yıldan uzun';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
    </>
  );
}
