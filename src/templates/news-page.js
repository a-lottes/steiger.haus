import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postCard"

// eslint-disable-next-line
const WorkPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} social={social}>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description || ''}
        image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}

      />

      {data.site.siteMetadata.description && (
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
        
      )}

        <article
          className={`post-content  no-image`}
        >
          {data.markdownRemark.frontmatter.description && (
            <div className="post-content-body">
            {data.markdownRemark.frontmatter.description}
            </div>
          )}

        </article>
        <section id="featured"> 
          <div className="row">
            {posts.map(({ node }) => {
              postCounter++
              return (
                <PostCard
                  key={node.fields.slug}
                  count={postCounter}
                  node={node}
                  postClass={`post`}
                />
              )
            })}
          </div>
        </section>
    </Layout>
  )
}
export default WorkPage
export const WorkPageQuery = graphql`
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
  markdownRemark(frontmatter: {templateKey: {eq: "news-page"}}) {
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
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
    limit: 30
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD:MM:YYYY hh:mm a")
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