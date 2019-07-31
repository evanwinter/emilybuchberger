import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <h1 style={{textAlign: `center`}}>Sorry, that page doesn't exist!</h1>
    <p style={{textAlign: `center`}}>
    	<Link to="/">Back</Link>
    </p>
  </Fragment>
)

export default NotFoundPage
