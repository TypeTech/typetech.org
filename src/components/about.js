import React from "react"
import styled from "@emotion/styled"
import SpanP from "./Reusable/SpanP"


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

const About = () => {
  return (
    <section
      style={{
        paddingBottom: 100,
      }}
    >
        <Container>
            <h2>
                <Spanx>Meet</Spanx><SpanP> us</SpanP>
            </h2>
        </Container>

    </section>
  )
}

export default About
