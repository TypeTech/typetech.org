import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Principles from "../components/principles"
import Services from "../components/services"
import About from "../components/about"
import ContactUs from "../components/contactus"
import TechStack from "../components/techstack"
import LazyLoad from "react-lazyload"
import ModeProvider from "../context/ModeContext"

const IndexPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <Principles />
      <Services />
      <LazyLoad
        placeholder={
          <section
            style={{
              paddingBottom: 100,
            }}
          ></section>
        }
      >
        <TechStack />
      </LazyLoad>
      <About />
      <LazyLoad
        placeholder={
          <section
            style={{
              paddingBottom: 100,
            }}
          ></section>
        }
      >
        <ContactUs />
      </LazyLoad>
    </Layout>
  </ModeProvider>
)

export default IndexPage
