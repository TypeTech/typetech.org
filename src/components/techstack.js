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
import SectionParagraph from "./Reusable/SectionParagraph"

const CardDiv = styled.div`
  display: flex;
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
        <SectionParagraph>
          Technologies we are proficient with, the use for each project might
          vary upon the clients requirements.
          <br />
        </SectionParagraph>
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
        <SectionParagraph>
          Other technologies such as cloud providers and server deployment
          services can be analyzed depending on the use of the application being
          built.
        </SectionParagraph>
      </SectionDesc>
    </section>
  )
}

export default TechStack
