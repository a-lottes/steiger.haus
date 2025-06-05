import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="col-md-3">
    <div className="productCard">
      <Link to={props.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${props.node.fields.slug.split('/').slice(2, -1).join('/')}`} className="post-card-link">
      <div className="cardImg" style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }>
        <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="product"/>
      </div>
      <div className="cardText">
        <span className="price">{props.node.frontmatter.price },-</span>
        <h1>{props.node.frontmatter.title }</h1>
        <p>{props.node.frontmatter.title }</p>
      </div>
      </Link>
    </div>
  </div>
)
