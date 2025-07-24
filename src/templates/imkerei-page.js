import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
// eslint-disable-next-line


const ImkereiPage = (props) => {


    const { markdownRemark: post, site } = props.data;

    return (
        <Layout location={props.location} title={site.siteMetadata.title } social={site.siteMetadata.social}>
        <Seo keywords={[`Imkerei`, `Imkerei Saarland`, `Saarbrücken`, `Dudweiler`]}
          title={post.frontmatter.title}
          description={post.frontmatter.description || ''}
          image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}

        />
         <section id="headerContent">
          <div id="topBackground">
            <div className="topMain">
              <div className="row">
                <div className="col-md-12 headText">
                  <div className="specialOffer">
                    <div className="main-headings">
                      <h2>{site.siteMetadata.title}</h2>
                      <h1>{post.frontmatter.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className="post-content-footer">
          </footer>
        </article>
      </Layout>
    );
};

ImkereiPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ImkereiPage;

export const ImkereiPageQuery = graphql`
  query ImkereiPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "imkerei-page"}}) {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData
            
            }
          }
        }
        html
      }
  }
`;