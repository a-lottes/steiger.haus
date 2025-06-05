import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LeftIcon from '../img/left-icon.svg'
import RightIcon from '../img/right-icon.svg'
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = (props) => {
  const { pageContext } = props
  const nextSlug = pageContext?.next ? pageContext?.next?.fields?.slug.split('/').slice(2, -1).join('/') === '' ? '/' :
    `/${pageContext.next.fields.slug.split('/').slice(2, -1).join('/')}` : '/';
  const previousSlug = pageContext.previous ? pageContext?.previous?.fields?.slug?.split('/').slice(2, -1).join('/') === '' ? '/' :
    `/${pageContext.previous.fields.slug.split('/').slice(2, -1).join('/')}` : "/"
  const nextLinkStatus = pageContext?.next ? pageContext?.next?.frontmatter?.templateKey === 'honig-sub-page' ? true : false : false
  const previousLinkStatus = pageContext?.previous ? pageContext?.previous?.frontmatter?.templateKey === 'honig-sub-page' ? true : false : false

  const post = props.data.markdownRemark
  const site = props.data.site
  const siteTitle = props.data.site.siteMetadata.title
  const social = props.data.site.siteMetadata.social
  return (
    <Layout location={props.location} title={siteTitle} social={social}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}

      />
      <article
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >
         <section id="headerContent">
          <div id="topBackground">
            <div className="topMain">
              <div className="row">
                <div className="col-md-3 logo">
                </div>
                <div className="col-md-6 headText">
                  <div className="specialOffer">
                    <div className="main-headings">
                      <h2>{site.siteMetadata.title}</h2>
                      <h1>{post.frontmatter.title}</h1>
                      <p>{post.frontmatter.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="post-link">
          <div>
          <a style={{ display: nextLinkStatus ? "flex" : 'none', alignItems: "center", color: "#131313", fontSize: "2rem" }} href={nextSlug} >
              <img src={LeftIcon} alt='' width={30} height={30} />
              <span>{pageContext.next ? pageContext.next.frontmatter.title : ""}
              </span>
            </a>

          </div>
          <div>
          <a style={{ display: previousLinkStatus ? "flex" : 'none', alignItems: "center", color: "#131313", fontSize: "2rem" }} href={previousSlug}>
              <span>{pageContext.previous ? pageContext.previous.frontmatter.title : ""}
              </span>
              <img src={RightIcon} alt='' width={30} height={30} />

            </a>

          </div>
        </div>
      </article>
    </Layout>
  );

}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social{
          twitter
          facebook
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          
          }
        }
    
      }
    }
  }
`
