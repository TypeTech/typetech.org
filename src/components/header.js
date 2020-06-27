import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Logomain from "./logomain"
import styled from "@emotion/styled"

const WrapperDiv=styled.div`
  display:block;
`

const Header = ({ siteTitle, location }) => (
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
          <ul className="nav-links">
            <Link className="nav-items" to="page-2">
              Home
            </Link>
            <Link className="nav-items" to="page-2">
              About us
            </Link>
            <Link className="nav-items" to="page-2">
              Blog
            </Link>
            <div></div>
          </ul>
        </nav>
      </header>
    </WrapperDiv>
    {/* <div className="undernav">
      <h3>{location}</h3>
    </div> */}
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
