import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logomain from "./logomain"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
        <div className="logo">
          <Logomain /><div>         
          </div>
        </div>
        <div>
          {siteTitle}
          {description}
        </div>
        <ul className="nav-links">
          <Link className="nav-items" to="page-2">Hola</Link>
          <Link className="nav-items" to="page-2"></Link>
          <Link className="nav-items" to="page-2">Hola</Link>
          <Link className="nav-items" to="page-2">Hola</Link>
          <Link className="nav-items" to="page-2">Hola</Link>
        </ul>
     
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
