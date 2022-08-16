import "../scss/contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState(undefined);

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
        setStatus("success");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setStatus("failed");
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div id="contact" className="contact jumptarget">
      <div className="contact-text">
        <h3 className="title">Contact Renascence</h3>
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
          <label htmlFor="Full_name">Full Name</label>
          <input
            required
            type="text"
            name="full_name"
            id="Full_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Preferred_name">Preferred Name</label>
          <input
            required
            type="text"
            id="Preferred_name"
            name="preferred_name"
            value={toSend.to_name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Email">Email</label>
          <input
            required
            type="text"
            id="Email"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div className="contact-grid">
          <label htmlFor="Messaage">Your Message</label>
          <textarea
            required
            type="text"
            placeholder="Are you interested in a free consultation?"
            id="Message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        {status === "success" && (
          <div className="contact-success">
            Success, check your email for confirmation.
            {/* <p> Check your email for confirmation</p> */}
          </div>
        )}
        {status === "failed" && (
          <div className="contact-failed">
            Oops, something went wrong!
            <br></br>
            Please contact us directly:
            <br></br>
            samfoston101@gmail.com
          </div>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
}
