import React from "react"
import styled from "@emotion/styled"

const InputEmail = styled.input`
  display: inline-block;
  text-align: center;
  letter-spacing: 0.026em;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
  background-color: transparent;
  color: #000000;
  outline: none;
  padding: 10px 2em;
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

const SubmitButton = styled.button`
  margin: 20px;
  padding: 10px;
  width: 10em;
  background-color: #4c9ac0;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  transition: background-color 1s ease;
  &:hover {
    cursor: pointer;
    background-color: #1476a2;
  }
`

const SubscribeForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      <InputEmail
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <SubmitButton
        onClick={submit}
        disabled={status === "sending" ? true : false}
      >
        {status === "sending" ? "Sending ..." : "Submit"}
      </SubmitButton>
    </div>
  )
}

export default SubscribeForm
