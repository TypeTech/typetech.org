import React from 'react';
import {useStaticQuery,graphql} from 'gatsby';
import Img from "gatsby-image"

const ReactLogo = () => {
    const data=useStaticQuery(graphql`
    query{
        placeholderImage: file(relativePath: {eq: "React.js_logo.png"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
    `)
    
    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}
 
export default ReactLogo;