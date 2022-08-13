import "../scss/contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    full_name: "",
    preferred_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      import.meta.env.VITE_EMAIL_JS_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      toSend,
      import.meta.env.VITE_PUBLIC_API
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div id="contact" className="contact jumptarget">
      <div className="contact-text">
        <h3>Contact Renascence</h3>
        <p>
          Taking the time to reflect is the first step. By contacting Sam at
          Renascence you're putting yourself on the fast track for positive
          changes in your life.
          <br></br>
          Get in contact now, we will get right back!
        </p>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <div className="contact-grid">
          <label htmlFor="Full_name">Full name</label>
          <input
            type="text"
            name="full_name"
            id="Full_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Preferred_name">Preferred name</label>
          <input
            type="text"
            id="Preffered_name"
            name="preferred_name"
            value={toSend.to_name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            id="Email"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Messaage">Your message</label>
          <input
            type="text"
            id="Message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
