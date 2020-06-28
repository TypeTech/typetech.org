import React, { useState } from "react"
import styled from "@emotion/styled"

const SubmitButton = styled.button``

const ContactForm = () => {
  const [email, setEmail] = useState()
  const [status, setstatus] = useState(false)

  const Trigger = e => {
    e.preventDefault()
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    if (email.trim() === "" || !regex.test(email)) {
      setstatus(true)
      return
    }
    setstatus(false)
  }

  return (
    <form
      action="https://gmail.us10.list-manage.com/subscribe/post?u=87f1632117fc73582c5efd107&amp;id=3fb05439f2"
      method="post"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <input
          type="email"
          value={email}
          placeholder="youremail@here.com"
          required
          onChange={()=>setEmail()}
        />
        <div>
          <p>{status?<p>Please fill the fields</p>:<span></span>}</p>
        </div>
        <div style={{ position: "absolute", left: -5000 }}>
          <input
            type="text"
            name="b_87f1632117fc73582c5efd107_3fb05439f2"
            tabIndex="-1"
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            className="button"
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
