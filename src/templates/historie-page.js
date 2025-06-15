import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/productCard"

// eslint-disable-next-line
const HistoriePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  let postCounter = 0

  return (
    <Layout title={siteTitle} social={social}>
      <Seo keywords={[]}
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description || ''}
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
                      <h1>{data.markdownRemark.frontmatter.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article
          className={`post-content  no-image`}
        >
          {data.markdownRemark.frontmatter.description && (
            <div className="post-content-body">
            {data.markdownRemark.frontmatter.description}
            </div>
          )}
        </article>

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
export default HistoriePage
export const HistoriePageQuery = graphql`
query IndexPage {
  site {
    siteMetadata {
      title
      author
      social{
        twitter
        facebook
      }
    }
  }
  markdownRemark(frontmatter: {templateKey: {eq: "historie-page"}}) {
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
}
`;