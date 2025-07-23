import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postCard"

// eslint-disable-next-line
const IndexPage = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social
    const posts = data.allMarkdownRemark.edges
    let postCounter = 0

    return (
        <Layout title={siteTitle} social={social}>
            <Seo keywords={[`Imkerei`, `Steigerhaus`, `Dudweiler`]}
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description ||  ''}
                image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}

            />  

            <section id="headerContent">
          <div id="topBackground">
            <div className="topMain">
              <div className="row">
                <div className="col-md-3 logo">
                </div>
                <div className="col-md-6 headText">
                  <div className="specialOffer">
                    <div className="main-headings">
                      <h2>{data.site.siteMetadata.title}</h2>
                      <h1>{data.markdownRemark.frontmatter.heading}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

             <div className="post-feed">
              <img src="/img/teaser.png" style={{margin: '0px auto'}} />   
            </div>
                
          <article
            className={`post-content ${data.markdownRemark.frontmatter.thumbnail || `no-image`}`}
          >
            <div
              className="post-content-body"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <footer className="post-content-footer">
            </footer>
          </article>
        </Layout>
    )
}
export default IndexPage
export const IndexPageQuery = graphql`
  query IndexPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }    
        }
      }
      markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
      allMarkdownRemark(
        filter: {frontmatter: {pagetype: {eq: "main"}}}
        limit: 30
        sort: {frontmatter: {number: ASC}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD,YYYY")
              title
              description
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1360) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }
`;