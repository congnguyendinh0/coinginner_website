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
    <p>Android App: https://play.google.com/store/apps/details?id=com.coinginner.coinginner&raii=com.coinginner.coinginner&rapt=AEjHL4N5zW6TWRfzJAHTi9njDfbXLFFKoz-EcK5ZfaV7S7XorEgNgs9x8SmFN1HmHGI6VqUzEinf0K7nXNFeFKR_aayCa6qdIWYtS7m9uiLtax3WAUIvdWI</p>
    <Button variant="contained" color="primary">
  Primary
</Button>
    <p>
      <Link to="/page-2/">Contact US</Link> <br />
    </p>
    <p>
      <Link to="/page-3/">Privacy</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
