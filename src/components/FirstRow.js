import React, { Fragment } from "react"
import Card from "./Stack/CardComponent"
import reactLogo from "../images/react-2.svg"
import nextjs from "../images/nextjs-3 (1).svg"
import gatsby from "../images/gatsby.svg"

const FirstRow = () => {
  return (
    <Fragment>
      <Card
        image={reactLogo}
        title="React"
        description="Frontend development"
      />
      <Card image={nextjs} title="Nextjs" description="Frontend development" />
      <Card image={gatsby} title="Gatsby" description="Frontend development" />
      <Card
        image={reactLogo}
        title="React"
        description="Frontend development"
      />
      <Card image={nextjs} title="Nextjs" description="Frontend development" />
      <Card image={gatsby} title="Gatsby" description="Frontend development" />
    </Fragment>
  )
}

export default FirstRow
