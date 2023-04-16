import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const featuredImage = getImage(node.frontmatter.featuredImage);
          const { date, description } = node.frontmatter;
          return (
            <div key={node.fields.slug}>
              {featuredImage && (
                <GatsbyImage image={featuredImage} alt={title} />
              )}
              <h2>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <small>{date}</small>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;

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
