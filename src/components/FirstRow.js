import React, { Fragment } from "react"
import { FIRSTROW } from "../data/firstrow"
import Card from "./Stack/CardComponent"

const FirstRow = () => {
  return (
    <Fragment>
      {FIRSTROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FIRSTROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FIRSTROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FIRSTROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {window.innerWidth < 700
        ? FIRSTROW.map(item => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        : null}
            {window.innerWidth < 700
        ? FIRSTROW.map(item => (
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

export default FirstRow
