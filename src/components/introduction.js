import React, { Fragment } from "react"
import styled from "@emotion/styled"
import MainDiv from "./Reusable/MainDiv"
import SecondDiv from "./Reusable/SecondDiv"


const TitleDiv = styled.div`
  font-size: 4em;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 5px 5px #1476a2;
`

const DescriptionDiv = styled.div`
  max-width: 800px;
  color: #ffffff;
  margin-top: 40px;
  font-size: 1.5em;
`

const Introduction = () => {
  return (
    <Fragment>
      <section>
        <MainDiv>
          <SecondDiv>
            <TitleDiv>Modern and efficient web applications</TitleDiv>
            <DescriptionDiv>
              We are TypeTech, a group of devs dedicated to Open Sourcing and
              freelancing software with cutting edge technologies
            </DescriptionDiv>
          </SecondDiv>
        </MainDiv>
      </section>
    </Fragment>
  )
}

export default Introduction
