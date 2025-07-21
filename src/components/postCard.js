import React from "react"
import { Link } from "gatsby"

export default props => (

  <div className="col-md-6">
    <div className="productCard">
      <Link to={props.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${props.node.fields.slug.split('/').slice(2, -1).join('/')}`} className="post-card-link">
      <div className="cardImg" style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }>
      </div>
      <div className="cardText">
        <h1>{props.node.frontmatter.title }</h1>
        <p>{props.node.frontmatter.description }</p>
      </div>
      </Link>
    </div>
  </div>
)
