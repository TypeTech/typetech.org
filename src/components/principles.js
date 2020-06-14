import React from "react"
import SpanP from "./Reusable/SpanP"
import ContainerDiv from "./Reusable/ContainerDiv"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardContent from "./Reusable/CardContent"
import CardLogo from "./Reusable/CardLogo"

const Principles = () => {
  return (
    <section>
      <ContainerDiv>
        <h2>
          Our <SpanP>principles</SpanP>
        </h2>
      </ContainerDiv>
      <GridDiv>
        <CardContainer>
          <CardContent>
            <CardLogo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.377 11.082c-.06 1.929-2.229 3.126-8.409 3.126-6.193 0-8.358-1.203-8.409-3.139 1.508 0 4.379-1.958 8.409-1.958 3.927-.001 7.144 1.971 8.409 1.971zm-8.408 4.09c-2.062 0-3.74-.131-5.078-.397.062.555.469 3.322 2.409 3.322 1.721 0 1.673-1.316 2.721-1.316 1.047 0 1.169 1.316 2.852 1.316 2.09 0 2.46-3.063 2.494-3.389-1.387.311-3.169.464-5.398.464zm6.405-.741c-.04 2.171-.717 4.769-2.28 6.437-1.048 1.119-2.377 1.687-3.949 1.687-1.575 0-2.898-.533-3.931-1.582-1.646-1.673-2.302-4.345-2.396-6.461-.523-.158-1.01-.347-1.484-.628-.016 2.472.704 5.942 2.821 8.094 1.321 1.341 3 2.022 4.99 2.022 1.972 0 3.712-.745 5.033-2.153 2.131-2.273 2.76-5.679 2.661-8.111-.459.308-.944.521-1.465.695zm-6.237-10.984l-.313.623-.701.1.507.485-.119.685.626-.324.627.324-.12-.685.507-.485-.7-.1-.314-.623zm7.211-.206s-2.537-.686-7.348-3.241c-4.812 2.555-7.348 3.241-7.348 3.241s-1.295 2.4-3.652 5.016l2.266 1.908c1.533-.165 4.64-2.082 8.734-2.082s7.201 1.917 8.734 2.083l2.266-1.909c-2.357-2.616-3.652-5.016-3.652-5.016zm-6.345 3.214c-.526.131-.605.188-.875.402-.269-.214-.349-.271-.875-.402-.731-.183-1.151-.656-1.151-1.299 0-.359.147-.691.318-1.146.192-.513.083-.675-.119-.882l-.171-.176.987-.819c.098.098.235.278.486.278.248 0 .416-.175.528-.271.102.09.268.271.523.271.248 0 .381-.171.49-.281l.983.823-.172.176c-.202.207-.311.369-.119.882.17.455.318.786.318 1.146 0 .641-.42 1.115-1.151 1.298z" />
            </svg>
            </CardLogo>
            <h1>Security</h1>
            <p>Our vision in development is to have secure apps to our clients and their services</p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            <CardLogo>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
            </CardLogo>
          <h1>Performance</h1>
          <p>Having fast and reliable applications to guarantee the efficiency </p>
          </CardContent>
        </CardContainer>
      </GridDiv>
      <ContainerDiv>Hola</ContainerDiv>
      <ContainerDiv>Hola</ContainerDiv>
      <ContainerDiv>Hola</ContainerDiv>
      <ContainerDiv>Hola</ContainerDiv>
    </section>
  )
}

export default Principles
