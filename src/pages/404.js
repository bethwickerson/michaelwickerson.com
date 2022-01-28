import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="section" id="home">
        <div className="container" style={{
          padding: "10rem 0",
        }}>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <a href="/">Go back home</a>
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
