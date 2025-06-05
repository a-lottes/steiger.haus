import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="col-md-3">
    <div className="productCard">
      <Link to={props.node.fields.slug.split('/').slice(2, -1).join('/') === '' ? '/' : `/${props.node.fields.slug.split('/').slice(2, -1).join('/')}`} className="post-card-link">
      <div className="cardImg">
        <img src="https://image.ibb.co/hJOZFw/product_placeholder.png" alt="product"/>
      </div>
      <div className="cardText">
        <span className="price">1500,-</span>
        <h1>{props.node.frontmatter.title }</h1>
        <p>{props.node.frontmatter.title }</p>
      </div>
      </Link>
    </div>
  </div>
)
