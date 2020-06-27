import React, { Fragment } from "react"
import Card from "./Stack/CardComponent"
import expressLogo from "../images/express-109.svg"
import postgLogo from "../images/postgresql.svg"
import mysqlLogo from "../images/mysql-6.svg"

const FourthRow = () => {
  return (
    <Fragment>
      <Card
        image={expressLogo}
        title="Express"
        description="Backend development"
      />
      <Card
        image={postgLogo}
        title="PostgreSQL"
        description="Databases management"
      />
      <Card
        image={mysqlLogo}
        title="MySQL"
        description="Databases management"
      />
      <Card
        image={expressLogo}
        title="Express"
        description="Backend development"
      />
      <Card
        image={postgLogo}
        title="PostgreSQL"
        description="Databases management"
      />
      <Card
        image={mysqlLogo}
        title="MySQL"
        description="Databases management"
      />
            <Card
        image={expressLogo}
        title="Express"
        description="Backend development"
      />
      <Card
        image={postgLogo}
        title="PostgreSQL"
        description="Databases management"
      />
      <Card
        image={mysqlLogo}
        title="MySQL"
        description="Databases management"
      />
    </Fragment>
  )
}

export default FourthRow
