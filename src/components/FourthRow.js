import React, { Fragment } from "react"
import { FOURTHDROW } from "../data/fourthrow"
import Card from "./Stack/CardComponent"

const FourthRow = () => {
  return (
    <Fragment>
      {FOURTHDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FOURTHDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FOURTHDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {FOURTHDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </Fragment>
  )
}

export default FourthRow
