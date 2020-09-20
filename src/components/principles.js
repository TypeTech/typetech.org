import React from "react"
import SpanP from "./Reusable/SpanP"
import ContainerDiv from "./Reusable/ContainerDiv"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import CardLogo from "./Reusable/CardLogo"
import { PRINCIPLES } from "../data/principles"

const Principles = () => {
  return (
    <section
      style={{
        paddingBottom: 100,
      }}
    >
      <ContainerDiv>
        <h2>
          Our <SpanP>principles</SpanP>
        </h2>
      </ContainerDiv>
      <GridDiv>
        {PRINCIPLES.map(item => (
          <CardContainer key={item.title}>
            <CardContent>
              <CardLogo>
                <img src={item.icon} alt={item.title} />
              </CardLogo>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </CardContent>
          </CardContainer>
        ))}
      </GridDiv>
    </section>
  )
}

export default Principles
