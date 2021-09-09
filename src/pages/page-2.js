import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Contact US</h1>
    <p> <p>Contact us: coinginner@gmail.com OR +4915147415346.</p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
