import React from "react"
import SpanP from "./Reusable/SpanP"
import styled from "@emotion/styled"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import CardLogo from "./Reusable/CardLogo"
import SectionDesc from "./Reusable/SectionDesc"

const Spanx = styled.span`
  color: #ffffff;
`
const Container = styled.div`
  width: 100%;
  padding-top: 5em;
  padding-bottom: 3em;
  background: #333333;
  display: flex;
  justify-content: center;
`
const SectionParagraph = styled.h5`
  font-size: 20px;
  color: #ffffff;
  margin: 24px 0px;
  text-align: center;
`

const Section = styled.section`
  background-color: #333333;
  color: #ffffff;
  padding-bottom: 100px;
`

const SVGs = styled.svg`
  fill: #ffffff;
`

const Services = () => {
  return (
    <Section>
      <Container>
        <h2>
          <Spanx>Our</Spanx> <SpanP>services</SpanP>
        </h2>
      </Container>
      <SectionDesc>
        <SectionParagraph>
          Some of the services that we provide
          <br />
        </SectionParagraph>
      </SectionDesc>
      <GridDiv>
        <CardContainer>
          <CardContent>
            <CardLogo>
              <SVGs
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" />
              </SVGs>
            </CardLogo>
            <h1><SpanP>Static</SpanP> Websites</h1>
            <p>
              Static websites are pages to display fixed content, for example
              your landing page, porfolio, information page.
            </p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            <CardLogo>
              <SVGs
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-10.172 12.274l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm6.512-3.746l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z" />
              </SVGs>
            </CardLogo>
            <h1><SpanP>Dynamic</SpanP> Websites</h1>
            <p>
              Well structured web applications, for dynamic content and
              operations using APIs and Databases.
            </p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            <CardLogo>
              <SVGs width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.563 24h-11.563c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v4h-2v-3h-14v17h11v2.5c0 .524.182 1.175.563 1.5zm8.937-17c.828 0 1.5.672 1.5 1.5v14c0 .826-.671 1.5-1.5 1.5h-7c-.829 0-1.5-.675-1.5-1.5v-14c0-.827.673-1.5 1.5-1.5h7zm-13.5 14c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10 2c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm4-3v-10.024h-8v10.024h8zm-3.5-11c.275 0 .5-.224.5-.5s-.225-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1z" />
              </SVGs>
            </CardLogo>
            <h1><SpanP>Mobile</SpanP> applications</h1>
            <p>Mobile apps using technologies such as React Native or Ionic </p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            <CardLogo>
              <SVGs width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.488l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm1-7.869v-1.714c-.006-1.557.062-2.447 1.854-2.861 1.963-.453 4.315-.859 3.384-2.577-2.761-5.092-.787-7.979 2.177-7.979 2.907 0 4.93 2.78 2.177 7.979-.904 1.708 1.378 2.114 3.384 2.577 1.799.415 1.859 1.311 1.853 2.879 0 .13-.011 1.171 0 1.665-.483-.309-1.442-.552-2.187.106-.535.472-.568.504-1.783 1.629-1.75-.831-4.456-1.883-6.214-2.478-.896-.304-2.04-.308-2.962.075l-1.683.699z" />
              </SVGs>
            </CardLogo>
            <h1><SpanP>Custom</SpanP> software</h1>
            <p>
              Software that is specially developed for some specific
              organization or other user.{" "}
            </p>
          </CardContent>
        </CardContainer>
      </GridDiv>
    </Section>
  )
}

export default Services
