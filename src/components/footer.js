import React from "react"
import PropTypes from "prop-types"
import Logomain from "./logomain"

const Footer = ({ siteTitle }) => {
  return (
    <>
      <footer>
        <div className="container-footer-all">
          <div className="container-body">
            <div className="column1">
                <Logomain />
                {siteTitle}
            </div>
          </div>
        </div>
        <div className="container-footer">
          <div className="footer">
            <div className="copyright">TypeTech | All rights reserved</div>
            <div className="information">TypeTech | All rights reserved</div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = { siteTitle: PropTypes.string }
Footer.defaultProps = { siteTitle: `` }

export default Footer
