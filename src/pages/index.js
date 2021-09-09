import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Coinginner here.</p>
    <p>Contact us: Go to contact us</p>
    <p>
      <Link to="/page-2/">Contact US</Link> <br />
    </p>
    <p>
      <Link to="/page-3/">Privacy Policy</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
