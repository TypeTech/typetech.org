import React from "react"
import "./stack.css"

const Card = ({ image, title, description }) => {
  return (
    <div class="courses-container">
      <div class="stacklogo">
        <div class="course-preview">
          <img src={image} alt="react-logo" className="logo" />
          <a href="#"></a>
        </div>
        <div class="course-info">
          <div class="progress-container"></div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
