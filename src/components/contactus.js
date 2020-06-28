import React, { Fragment } from "react"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import SpanP from "./Reusable/SpanP"
import styled from "@emotion/styled"                        
import ContactForm from "./contactform"

const MainDiv = styled.div`
  padding-top: 30px;
  font-size:1.1rem;
`

const ContactUs = () => {
  return (
    <Fragment>
      <section
        style={{
          paddingTop: 100,
        }}
      >
        <CardContainer>
          <CardContent>
            <h2>
              <SpanP>Connect </SpanP>
              <span>with us</span>
            </h2>
            <MainDiv>
              <p>We would love to hear from you, </p>
              <ContactForm/>
            </MainDiv>
          </CardContent>
        </CardContainer>
      </section>
    </Fragment>
  )
}

export default ContactUs
