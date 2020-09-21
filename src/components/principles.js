import React, { useContext } from "react"
import SpanP from "./Reusable/SpanP"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import CardLogo from "./Reusable/CardLogo"
import { PRINCIPLES } from "../data/principles"
import "../styles/main.css"
import { ModeContext } from "../context/ModeContext"

const Principles = () => {
  const { mode } = useContext(ModeContext)
  return (
    <section
      className={mode?"Section-Dark":"Section"}
    >
      <div className={mode ? "Container-Div-Dark" : "Container-Div"}>
        <h2 className={mode?"Heading-Dark":"Heading"}>
          Our <SpanP>principles</SpanP>
        </h2>
      </div>
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
