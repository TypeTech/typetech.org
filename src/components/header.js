import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Logomain from "./logomain"
import styled from "@emotion/styled"

const WrapperDiv = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
`

const Head = styled.header`
  background-color: var(--xstyled-colors-bg, #292929);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--xstyled-colors-border, #1976d2);
  padding: 16px 0px;
`

const InsideDiv = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px auto;
`

const InsideInsideDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
`

const SVG = styled.svg`
  fill: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    margin-right: 40px;
    width: 30px;
  }
`
const Title = styled.h2`
  display: block;
  font-weight: 900;
  font-size: 20px;
  line-height: 0.9;
  margin: 0px 0px 0px 10px;
  color: #1476a2;
  animation: logotextanimation 2s alternate infinite;
`

const MainLink = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
  text-decoration: none;
`

const ComboLanguage = styled.select`
  font-size: 17px;
  font: inherit;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 4vh;
  line-height: -4vh;
  text-rendering: auto;
  width: 100%;
  border-radius: 0.5rem;
  border: 2px solid #5a5a5a;
  background: #333;
  color: white;
  padding-left: 40px;
  padding-right: 10px;
  transition: border-color 0.15s ease;
  cursor:pointer;

  &:focus {
    border: 2px solid #039be5;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const NavList = styled.nav`
  height: 40px;
  margin-left: 10px;
  position: relative;
  overflow-x: auto;
`

const NavInnerList = styled.ul`
  color: var(--xstyled-colors-text, #222);
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 34px;
`

const NavItems = styled.li`
  list-style-type: none;
  flex: 1 1 auto;
  margin: 0px;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.2;
`

const NavLinks = styled.a`
  appearance: none;
  color: #fff;
  display: flex;
  padding: 0px 10px;
  background-color: transparent;
  border: 0px;
  transition: color 300ms ease 0s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #039be5;
    text-decoration: none;
  }
`

const SmallContainer = styled.div`
  overflow: auto;
`

const SvG = styled.svg`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  fill: white;
`

const Header = ({ siteTitle }) => (
  <Fragment>
    <WrapperDiv>
      <Head>
        <InsideDiv>
          <InsideInsideDiv>
            <LogoContainer>
              <MainLink href="/">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: 42,
                    height: 42,
                  }}
                >
                  <Logomain />
                </div>
                <Title>{siteTitle}</Title>
              </MainLink>
            </LogoContainer>
            <div
              style={{
                marginLeft: "auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <SvG
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21h-1.713l-.658-1.846h-3l-.663 1.846h-1.659l3.04-8h1.603l3.05 8zm-2.814-3.12l-1.049-3.018-1.054 3.018h2.103zm2.814-5.88c.552 0 1 .449 1 1v8c0 .551-.448 1-1 1h-8c-.552 0-1-.449-1-1v-8c0-.551.448-1 1-1h8zm0-2h-8c-1.656 0-3 1.343-3 3v8c0 1.657 1.344 3 3 3h8c1.657 0 3-1.343 3-3v-8c0-1.657-1.343-3-3-3zm-15.855-2.114c.039.58.103 1.115.195 1.593-1.225.224-1.275-.984-.195-1.593zm8.855-4.886v5h-1c-.742 0-1.441.173-2.076.465-.195-.806-.783-1.53-1.68-1.964.078-.298.123-.522.167-.744l-1.35-.261c-.022.112-.063.327-.135.613-.455-.067-.94-.075-1.431-.026.011-.329.032-.653.06-.963h1.508v-1.278h-1.327c.065-.326.121-.521.176-.705l-1.316-.396c-.098.323-.178.64-.26 1.101h-1.504v1.278h1.341c-.036.414-.058.842-.064 1.275-1.48.544-2.109 1.581-2.109 2.521 0 1.11.876 2.086 2.261 1.96 1.72-.156 2.868-1.456 3.542-3.053.885.536.838 1.161.772 1.552-.965.913-1.575 2.196-1.575 3.625v1h-5c-1.656 0-3-1.343-3-3v-8c0-1.657 1.344-3 3-3h8c1.657 0 3 1.343 3 3zm-7.5 4.467c.328-.042.658-.05.97-.026-.214.476-.497.948-.857 1.319-.054-.396-.092-.83-.113-1.293z" />
                </SvG>
                <ComboLanguage>
                  <option>English</option>
                  <option>Spanish</option>
                </ComboLanguage>
              </div>
            </div>
            <SmallContainer>
              <NavList>
                <NavInnerList>
                  <NavItems>
                    <NavLinks href="/pricing">Pricing</NavLinks>
                  </NavItems>
                </NavInnerList>
              </NavList>
            </SmallContainer>
          </InsideInsideDiv>
        </InsideDiv>
      </Head>
    </WrapperDiv>
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
