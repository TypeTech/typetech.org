import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Principles from "../components/principles"
import Services from "../components/services"
import TechStack from "../components/techstack"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction/>
    <Principles/>
    <Services/>
    <TechStack/>
  </Layout>
)

export default IndexPage
