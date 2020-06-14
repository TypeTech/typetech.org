import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Principles from "../components/principles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction/>
    <Principles/>
  </Layout>
)

export default IndexPage
