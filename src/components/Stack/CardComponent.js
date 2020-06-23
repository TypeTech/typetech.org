import React from "react"
import "./stack.css"

const Card = ({ image, title, description }) => {
  return (
    <div className="courses-container">
      <div className="stacklogo">
        <div className="course-preview">
          <img src={image} alt="react-logo" className="logo" />
        </div>
        <div className="course-info">
          <div className="progress-container"></div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
