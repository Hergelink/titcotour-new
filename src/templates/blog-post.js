import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout.jsx';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/singleBlog.module.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 1989;

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
      <div className={styles.callToActionDiv}>
        <h3>Bizimle Çalışın</h3>
        <p>
          Kurumsala çalışmak konusunda {yearsOfOperation} yıllık bir deneyime
          sahibiz. Sizin dilinizi iyi bilen ekibimizle, yaklaşan
          seyahatlerinizle ilgili tüm detayları incelikli biçimde, hızla çözer,
          sorularınıza anında yanıt verir, öneriye ihtiyacınız olduğunda en
          doğru seçenekleri sunarız.
        </p>
        <Link to='/iletisim' className={styles.callToActionBtn}>İletişim</Link>
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
