import React from 'react';
import Layout from '../components/Layout';

export default function blog() {
  return (
    <Layout>
      <div>Blog</div>
    </Layout>
  );
}

export function Head({ title, description }) {
  const defaultTitle = 'Titco Tour - Blog';
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
