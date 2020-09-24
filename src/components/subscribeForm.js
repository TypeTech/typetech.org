import React, { useContext } from "react"
import "../styles/contact.css"
import { ModeContext } from "../context/ModeContext"


const SubscribeForm = ({ status, message, onValidated }) => {
  const { mode } = useContext(ModeContext)
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <>
      <label className={mode ? "Label-Dark" : "Label"}>
        Get the latest news about TypeTech
        <br></br>
        <input
          ref={node => (email = node)}
          type="email"
          name="email"
          placeholder="Your email here"
          className={mode ? "Input-Dark" : "Input"}
        />
      </label>
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
      <button
        onClick={submit}
        disabled={status === "sending" ? true : false}
        className="Subscribe-Form-Button"
      >
        {status === "sending" ? "Sending ..." : "Subscribe"}
      </button>
    </>
  )
}

export default SubscribeForm
