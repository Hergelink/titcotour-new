import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/blog.module.css';

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges;

  const truncateDescription = (description, maxLength) => {
    if (!description || description.length <= maxLength) {
      return description;
    }

    const truncated = description.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return truncated.slice(0, lastSpaceIndex);
  };

  return (
    <Layout>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.blogContainer}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const featuredImage = node.frontmatter.featuredImage;
          const { date, description } = node.frontmatter;
          const truncatedDescription = truncateDescription(description, 200);
          return (
            <div key={node.fields.slug} className={styles.blogPosts}>
              {featuredImage && (
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  alt={title}
                  className={styles.blogPostsImage}
                />
              )}
              <div className={styles.blogPostsContent}>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <small>{date}</small>
                <p>
                  {truncatedDescription}
                  <Link
                    to={node.fields.slug}
                    className={styles.continueReading}
                  >
                    Devamını Oku...
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
    </>
  );
}
