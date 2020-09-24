import React, { useContext } from "react"
import PropTypes from "prop-types"
import "../../styles/footer.css"
import { ModeContext } from "../../context/ModeContext"
import ContactForm from "../contactform"

const Footer = ({ siteTitle }) => {
  const { mode } = useContext(ModeContext)
  return (
    <>
      <footer
        className={mode ? "Footer-Container-Dark" : "Footer-Container-Light"}
      >
        <div className="Footer-Insider">
          <div className="Footer-Insider-C1">
            <div className="Footer-Insider-Column">
              <p className="Column-Paragraph">Organization</p>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                About us
              </a>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                Blog
              </a>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                GitHub
              </a>
            </div>
            <div className="Footer-Insider-Column">
              <p className="Column-Paragraph">Services</p>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                Pricing
              </a>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                Newsletter
              </a>
            </div>
            <div className="Footer-Insider-Column">
              <p className="Column-Paragraph">Legal</p>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                Terms
              </a>
              <a
                href="https://github.com/TypeTech"
                target="blank"
                className={mode ? "Footer-links-dark" : "Footer-links-light"}
              >
                Privacy
              </a>
            </div>
            <div className="Footer-Insider-Column">
              <ContactForm />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = { siteTitle: PropTypes.string }
Footer.defaultProps = { siteTitle: `` }

export default Footer
