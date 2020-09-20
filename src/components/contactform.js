import React, { useState } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubscribeForm from '../components/subscribeForm'



const ContactForm = () => {
  const [email, setEmail] = useState("")
  const url =
    "https://gmail.us10.list-manage.com/subscribe/post?u=87f1632117fc73582c5efd107&id=3fb05439f2"

  const handleChange = e => {
    setEmail(e)
  }
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
      
          <SubscribeForm status={status} message={message} onValidated={formData => subscribe(formData)} />
          
          // <form onSubmit={formData => subscribe(formData)} className="validate">
          //   <div id="mc_embed_signup_scroll">
          //     <InputEmail
          //       type="email"
          //       value={email}
          //       name="EMAIL"
          //       placeholder="youremail@here.com"
          //       onChange={e => handleChange(e.currentTarget.value)}
          //       required
          //     />

          //     <div style={{ position: "absolute", left: -5000 }}>
          //       <input
          //         type="text"
          //         name="b_87f1632117fc73582c5efd107_3fb05439f2"
          //         tabIndex="-1"
          //       />
          //     </div>
          //     <div className="clear">
          //       <SubmitButton
          //         type="submit"
          //         value="Subscribe"
          //         name="subscribe"
          //         className="button"
          //       />
          //     </div>
          //   </div>
          // </form>
          // {status === "sending" && (
          //   <div style={{ color: "blue" }}>sending...</div>
          // )}
          // {status === "error" && (
          //   <div
          //     style={{ color: "red" }}
          //     dangerouslySetInnerHTML={{ __html: message }}
          //   />
          // )}
          // {status === "success" && (
          //   <div style={{ color: "green" }}>Subscribed !</div>
          
      )}
    />
  )
}

export default ContactForm


