import "../scss/contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    full_name: "",
    prefered_name: "",
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
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="full name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prefered_name"
          placeholder="preferd name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
