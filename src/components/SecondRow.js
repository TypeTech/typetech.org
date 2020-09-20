import React, { Fragment } from "react"
import { SECONDROW } from "../data/secondrow"
import Card from "./Stack/CardComponent"

const SecondRow = () => {
  return (
    <Fragment>
      {SECONDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {SECONDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {SECONDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {SECONDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {window.innerWidth < 700
        ? SECONDROW.map(item => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        : null}
      {window.innerWidth < 700
        ? SECONDROW.map(item => (
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

export default SecondRow
