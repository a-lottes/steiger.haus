import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postCard"

// eslint-disable-next-line
const ImprintPage = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social
    const posts = data.allMarkdownRemark.edges
    let postCounter = 0

    return (
        <Layout title={siteTitle} social={social}>
       <Seo keywords={[``]}
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description || ''}
        image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}

      />
        <div className="post-content-body">
          <p>
            <h1>Impressum</h1>
            <b>Dieses Impressum gilt für alle Angebote unter der Domain steiger.haus inklusive aller Subdomains</b>
            <h3>Angaben gemäß §5 DDG</h3>
            Steigerhaus Imkerei<br/>
            Andreas Lottes<br/>
            Rehbachstraße 95<br/>
            66125 Saarbrücken-Dudweiler<br/>
            E-Mail: andreas@lottes.dev<br/>
            Kontakt: https://steiger.haus/contact/

          </p>
        </div>
        </Layout>
    )
}
export default ImprintPage
export const ImprintPageQuery = graphql`
  query ImprintPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }    
        }
      }
      markdownRemark(frontmatter: {templateKey: {eq: "imprint-page"}}) {
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