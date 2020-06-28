import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Logomain from "./logomain"
import styled from "@emotion/styled"

const WrapperDiv=styled.div`
  display:block;
`

const Header = ({ siteTitle }) => (
  <Fragment>
    <WrapperDiv>
      <header
        style={{
          background: `gray`,
          display:`block`,
        }}
      >
        <nav>
          <div className="logocontainer">
            <div className="logo">
              <Logomain />
            </div>
            <div className="title">{siteTitle}</div>
          </div>
        </nav>
      </header>
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
