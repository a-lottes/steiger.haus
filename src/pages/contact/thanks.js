
import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Thanks = (props) => {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social

    return (
        <Layout location={props.location} title={siteTitle} social={social}>
            <SEO title="Vielen Dank | Anfrage erfolgreich übermittelt" />


            <article className="post-content page-template no-image">
              <div className="thank-you">
                <div className="post-content-body">
                    <h1>Vielen Dank</h1>
                    <p> Die Anfrage wurde erfolgreich übermittelt</p>
                    <p><a href="/">zurück</a></p>
                </div>
              </div>
            </article>
        </Layout>
    )

}

export default Thanks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social{
          twitter
          facebook
        }
      }
    }
  }
`
