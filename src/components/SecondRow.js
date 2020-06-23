import React, { Fragment } from "react"
import Card from "./Stack/CardComponent"
import angularLogo from "../images/angular-icon-1.svg"
import netlifylogo from "../images/netlify.svg"
import vercellogo from "../images/vercel_logo.svg"

const SecondRow = () => {
  return (
    <Fragment>
      <Card
        image={angularLogo}
        title="Angular 9"
        description="Frontend development"
      />
      <Card
        image={netlifylogo}
        title="Netlify"
        description="Frontend Deployment/hosting service"
      />
      <Card
        image={vercellogo}
        title="Vercel"
        description="Frontend Deployment/hosting service"
      />
      <Card
        image={angularLogo}
        title="Angular 9"
        description="Frontend development"
      />
      <Card
        image={netlifylogo}
        title="Netlify"
        description="Frontend Deployment/hosting service"
      />
      <Card
        image={vercellogo}
        title="Vercel"
        description="Frontend Deployment/hosting service"
      />
    </Fragment>
  )
}

export default SecondRow
