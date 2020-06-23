import React from "react"
import SpanP from "./Reusable/SpanP"
import styled from "@emotion/styled"

const Spanx = styled.span`
  color: #ffffff;
`
const Container = styled.div`
  width: 100%;
  padding-top: 5em;
  padding-bottom: 5em;
  background: #333333;
  display: flex;
  justify-content: center;
`

const Services = () => {
  return (
    <section>
      <Container>
        <h2>
          <Spanx>Our</Spanx> <SpanP>services</SpanP>
        </h2>
      </Container>
    </section>
  )
}

export default Services
