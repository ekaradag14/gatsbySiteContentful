import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Return Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
