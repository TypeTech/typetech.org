import React from 'react';
import ContainerDiv from './Reusable/ContainerDiv';
import SpanP from './Reusable/SpanP';
import StackContainer from './Reusable/StackContainer';
import StackBrandsContainer from './Reusable/StackBrandsContainer';
import StackBrandsContent from './Reusable/StackBrandsContent';

const TechStack = () => {
    return ( 
        <section>
            <ContainerDiv>
                <h2>Our <SpanP>Tech</SpanP> Stack</h2>
            </ContainerDiv>
            <StackContainer>
                <StackBrandsContainer>
                    <StackBrandsContent>
                        
                    </StackBrandsContent>
                </StackBrandsContainer>
            </StackContainer>
        </section>
     );
}
 
export default TechStack;