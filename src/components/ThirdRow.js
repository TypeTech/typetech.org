import React, { Fragment } from "react"
import Card from "./Stack/CardComponent"
import { THIRDROW } from "../data/thirdrow"

const ThirdRow = () => {
  return (
    <Fragment>
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {window.innerWidth < 700
        ? THIRDROW.map(item => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        : null}
      {window.innerWidth < 700
        ? THIRDROW.map(item => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        : null}
    </Fragment>
  )
}

export default ThirdRow
