import React, { useState } from "react"
import styled from "@emotion/styled"

const InputEmail = styled.input`
  display: inline-block;
  text-align: center;
  letter-spacing: 0.026em;
  cursor: pointer;
  font-size: 0.875rem;
  text-transform: none;
  background-color: transparent;
  color: #000000;
  outline: none;
  padding: 8px 1.6em;
  text-decoration: none;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #000000;
  border-image: initial;
  &:focus {
    border-color: #4c9ac0;
  }
`

const SubmitButton = styled.input`
  margin: 20px;
  padding: 10px;
  width: 40%;
  background-color: #4c9ac0;
  border: none;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  cursor:pointer;
  &:hover{
    transition:1s ease;
    background-color:#1476a2;
  }
`

const ContactForm = () => {
  const [email, setEmail] = useState()
  return (
    <form
      action="https://gmail.us10.list-manage.com/subscribe/post?u=87f1632117fc73582c5efd107&amp;id=3fb05439f2"
      method="post"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <InputEmail
          type="email"
          value={email}
          name="EMAIL"
          placeholder="youremail@here.com"
          required
        />

        <div style={{ position: "absolute", left: -5000 }}>
          <input
            type="text"
            name="b_87f1632117fc73582c5efd107_3fb05439f2"
            tabIndex="-1"
          />
        </div>
        <div className="clear">
          <SubmitButton
            type="submit"
            value="Subscribe"
            name="subscribe"
            className="button"
            onSubmit={() => setEmail()}
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
