import React, { useContext } from "react"
import SpanP from "./Reusable/SpanP"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardLogo from "./Reusable/CardLogo"
import SectionDesc from "./Reusable/SectionDesc"
import "../styles/main.css"
import "../styles/services.css"
import { SERVICES } from "../data/services"
import { ModeContext } from "../context/ModeContext"

const Services = () => {
  const { mode } = useContext(ModeContext)
  return (
    <section className={mode ? "Section-S-Dark" : "Section-S-Light"}>
      <div
        className={mode ? "Head-S-Container-Dark" : "Head-S-Container-Light"}
      >
        <h2>
          <span className={mode ? "SpanHead-Dark" : "SpanHead-Light"}>Our</span>{" "}
          <SpanP>services</SpanP>
        </h2>
      </div>
      <SectionDesc>
        <h3 className={mode ? "Paragraph-S-Dark" : "Paragraph-S-Light"}>
          Some of the services that we provide
        </h3>
      </SectionDesc>
      <GridDiv>
        {SERVICES.map(item => (
          <CardContainer key={item.title}>
            <div className={mode ? "Second-Card-Content-Dark" : "Second-Card-Content-Light"}>
              <CardLogo>
                {!mode ? (
                  <img src={item.iconDark} alt={item.title} />
                ) : (
                  <img src={item.icon} alt={item.title} />
                )}
              </CardLogo>
              <h1>
                <SpanP>{item.title}</SpanP> {item.main}
              </h1>
              <p>{item.description}</p>
            </div>
          </CardContainer>
        ))}
      </GridDiv>
    </section>
  )
}

export default Services
