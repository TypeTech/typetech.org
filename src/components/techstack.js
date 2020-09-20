import React from "react"
import ContainerDiv from "./Reusable/ContainerDiv"
import SpanP from "./Reusable/SpanP"
import StackContainer from "./Reusable/StackContainer"
import StackBrandsContainer from "./Reusable/StackBrandsContainer"
import StackBrandsContent from "./Reusable/StackBrandsContent"
import "./Reusable/layout.css"
import styled from "@emotion/styled"
import TopMovement from "./Stack/TopMovement"
import BottomMovement from "./Stack/BottomMovement"
import FirstRow from "./FirstRow"
import SecondRow from "./SecondRow"
import ThirdRow from "./ThirdRow"
import FourthRow from "./FourthRow"
import SectionDesc from "../components/Reusable/SectionDesc"

const CardDiv = styled.div`
  display: flex;
`

const StackP = styled.h3`
  font-size: 20px;
  color: #292929;
  margin: 24px 0px;
  margin-bottom: 30px;
  text-align: justify;

  @media (max-width: 700px) {
    font-size: 1rem;
    margin:20px;
  }
`

const TechStack = () => {
  return (
    <section
      style={{
        paddingBottom: 100,
      }}
    >
      <ContainerDiv>
        <h2>
          Our <SpanP>Tech</SpanP> Stack
        </h2>
      </ContainerDiv>
      <SectionDesc>
        <StackP>
          Technologies we are proficient with, the use for each project might
          vary upon the clients requirements.
          <br />
        </StackP>
      </SectionDesc>
      <StackContainer>
        <StackBrandsContainer>
          <StackBrandsContent>
            <TopMovement>
              <CardDiv>
                <FirstRow />
              </CardDiv>
            </TopMovement>
            <BottomMovement>
              <CardDiv>
                <SecondRow />
              </CardDiv>
            </BottomMovement>
            <TopMovement>
              <CardDiv>
                <ThirdRow />
              </CardDiv>
            </TopMovement>
            <BottomMovement>
              <CardDiv>
                <FourthRow />
              </CardDiv>
            </BottomMovement>
          </StackBrandsContent>
        </StackBrandsContainer>
      </StackContainer>
      <SectionDesc>
        <StackP>
          Other technologies such as cloud providers and server deployment
          services can be analyzed depending on the use of the application being
          built.
        </StackP>
      </SectionDesc>
    </section>
  )
}

export default TechStack
