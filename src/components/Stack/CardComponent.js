import React from "react"
import "./stack.css"

const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className="courses-container">
        <div className="stacklogo">
          <div className="course-preview">
            <img src={image} alt="react-logo" className="logo" />
          </div>
          <div className="course-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="courses-separate">
        <div className="course-preview">
          <img src={image} alt="react-logo" className="logo" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
