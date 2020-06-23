import React from "react"
import ContainerDiv from "./Reusable/ContainerDiv"
import SpanP from "./Reusable/SpanP"
import StackContainer from "./Reusable/StackContainer"
import StackBrandsContainer from "./Reusable/StackBrandsContainer"
import StackBrandsContent from "./Reusable/StackBrandsContent"
import reactLogo from "../images/react-2.svg"
import angularLogo from "../images/angular-icon-1.svg"
import nextjs from "../images/nextjs-3 (1).svg"
import gatsby from "../images/gatsby.svg"
import dotnetLogo from "../images/dot-net-core-7.svg"
import laravelLogo from "../images/laravel-2.svg"
import nodeLogo from "../images/nodejs-icon.svg"
import expressLogo from "../images/express-109.svg"
import netlifylogo from "../images/netlify.svg"
import vercellogo from "../images/vercel_logo.svg"
import postgLogo from "../images/postgresql.svg"
import mysqlLogo from "../images/mysql-6.svg"
import Card from "./Stack/CardComponent"
import "./Reusable/layout.css"
import styled from "@emotion/styled"

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
            <CardDiv>
              <Card
                image={reactLogo}
                title="React"
                description="Frontend development"
              />
              <Card
                image={nextjs}
                title="Nextjs"
                description="Frontend development"
              />
              <Card
                image={gatsby}
                title="Gatsby"
                description="Frontend development"
              />
            </CardDiv>
            <CardDiv>
              <Card
                image={angularLogo}
                title="Angular 9"
                description="Frontend development"
              />
              <Card
                image={netlifylogo}
                title="Netlify"
                description="Frontend development"
              />
              <Card
                image={vercellogo}
                title="Vercel"
                description="Frontend development"
              />
            </CardDiv>
            <CardDiv>
              <Card
                image={dotnetLogo}
                title=".NET Core"
                description="Frontend development"
              />
            <Card
                image={laravelLogo}
                title="Laravel"
                description="Frontend development"
              />
              <Card
                image={nodeLogo}
                title="NodeJS"
                description="Frontend development"
              />
            </CardDiv>
            <CardDiv>
            <Card
                image={expressLogo}
                title="PostgreSQL"
                description="Frontend development"
              />
              <Card
                image={postgLogo}
                title="PostgreSQL"
                description="Frontend development"
              />
              <Card
                image={mysqlLogo}
                title="MySQL"
                description="Frontend development"
              />
            </CardDiv>
          </StackBrandsContent>
        </StackBrandsContainer>
      </StackContainer>
    </section>
  )
}

export default TechStack
