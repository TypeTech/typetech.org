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
    </section>
  )
}

export default TechStack
