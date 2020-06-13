import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logomain from "./logomain"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div
          className="logo"
        >
          <Logomain />
        </div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
