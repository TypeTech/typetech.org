import React, { Fragment } from "react"
import Card from "./Stack/CardComponent"
import dotnetLogo from "../images/dot-net-core-7.svg"
import laravelLogo from "../images/laravel-2.svg"
import nodeLogo from "../images/nodejs-icon.svg"

const ThirdRow = () => {
  return (
    <Fragment>
      <Card
        image={dotnetLogo}
        title=".NET Core"
        description="Backend development"
      />
      <Card
        image={laravelLogo}
        title="Laravel"
        description="Backend development"
      />
      <Card image={nodeLogo} title="NodeJS" description="Backend development" />
      <Card
        image={dotnetLogo}
        title=".NET Core"
        description="Backend development"
      />
            <Card
        image={laravelLogo}
        title="Laravel"
        description="Backend development"
      />
      <Card image={nodeLogo} title="NodeJS" description="Backend development" />
      <Card
        image={dotnetLogo}
        title=".NET Core"
        description="Backend development"
      />
      <Card
        image={laravelLogo}
        title="Laravel"
        description="Backend development"
      />
      <Card image={nodeLogo} title="NodeJS" description="Backend development" />
    </Fragment>
  )
}

export default ThirdRow
