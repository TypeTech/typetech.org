import React from 'react';
import ContainerDiv from './Reusable/ContainerDiv';
import SpanP from './Reusable/SpanP';
import StackContainer from './Reusable/StackContainer';
import StackBrandsContainer from './Reusable/StackBrandsContainer';
import StackBrandsContent from './Reusable/StackBrandsContent';
import ReactLogo from './Stack/reactlogo';
import AngularLogo from './Stack/angularlogo';

const TechStack = () => {
    return ( 
        <section>
            <ContainerDiv>
                <h2>Our <SpanP>Tech</SpanP> Stack</h2>
            </ContainerDiv>
            <StackContainer>
                <StackBrandsContainer>
                    <StackBrandsContent>
                        <div style={{
                            width:60
                        }}>
                            <ReactLogo/>
                        </div>
                        <div style={{
                            width:60
                        }}>
                            <AngularLogo/>
                        </div>
                    </StackBrandsContent>
                </StackBrandsContainer>
            </StackContainer>
        </section>
     );
}
 
export default TechStack;