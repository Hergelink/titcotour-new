import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/singleBlog.module.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.singlePostContainer}>
        {post.frontmatter.featuredImage && (
          <GatsbyImage
            image={
              post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            }
            alt={post.frontmatter.title}
            className={styles.postImage}
          />
        )}
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
