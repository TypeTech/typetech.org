import React from 'react';
import {useStaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';

const AngularLogo = () => {
    const data=useStaticQuery(graphql`
    query{
        placeholderImage: file(relativePath: {eq: "Angular_logo.png"}) {
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
 
export default AngularLogo;