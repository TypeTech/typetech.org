import React, { useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import "./stack.css"

const Card = ({ image, title, description }) => {
  const { mode } = useContext(ModeContext)
  return (
    <div>
      <div className="courses-container">
        <div className={mode ? "stacklogo-dark" : "stacklogo"}>
          <div className={mode ? "course-preview-dark" : "course-preview"}>
            <img
              src={image}
              alt="react-logo"
              className={mode ? "logo-dark" : "logo"}
            />
          </div>
          <div className="course-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="courses-separate">
      <div className={mode ? "course-preview-dark" : "course-preview"}>
          <img
            src={image}
            alt="react-logo"
            className={mode ? "logo-dark" : "logo"}
          />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
