import React from "react"
import ContainerDiv from "./Reusable/ContainerDiv"
import SpanP from "./Reusable/SpanP"
import StackContainer from "./Reusable/StackContainer"
import StackBrandsContainer from "./Reusable/StackBrandsContainer"
import StackBrandsContent from "./Reusable/StackBrandsContent"
import reactLogo from '../images/react-2.svg'
import angularLogo from '../images/angular-icon-1.svg'
import nextjs from '../images/nextjs-3 (1).svg'
import gatsby from '../images/gatsby.svg'
import dotnetLogo from '../images/dot-net-core-7.svg'
import laravelLogo from '../images/laravel-2.svg'
import nodeLogo from '../images/nodejs-icon.svg'
import expressLogo from '../images/express-109.svg'
import postgLogo from '../images/postgresql.svg'
import mysqlLogo from '../images/mysql-6.svg'
import "./Reusable/layout.css"



const TechStack = () => {
  return (
    <section>
      <ContainerDiv>
        <h2>
          Our <SpanP>Tech</SpanP> Stack
        </h2>
      </ContainerDiv>
      <StackContainer>
        <StackBrandsContainer>
          <StackBrandsContent>
            <div
              style={{
                width: 100,
              }}
            >
              <img src={reactLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
                <img src={nextjs} alt="express-logo" className="logo"/>

            </div>
            <div
              style={{
                width: 100,
              }}
            >
              <img src={gatsby} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
              <img src={angularLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
             <img src={nodeLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
            <img src={laravelLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                  width: 100,
                }}
            >
                <img src={dotnetLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
              <img src={expressLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
             <img src={postgLogo} alt="react-logo" className="logo"/>
            </div>
            <div
              style={{
                width: 100,
              }}
            >
             <img src={mysqlLogo} alt="react-logo" className="logo"/>
            </div> 

          </StackBrandsContent>
        </StackBrandsContainer>
      </StackContainer>
    </section>
  )
}

export default TechStack
