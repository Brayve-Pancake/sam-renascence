import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import logo from "../assets/r-logo.png";
import "../scss/welcome.scss";

export default function Welcome() {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/vlDzYIIOYmM"
  );

  return (
    <div className="c1Welcome">
      <img className="logo" src={logo} alt="company logo" />
      <div className="container px-4 mt-3 container1">
        <h1 className="display-6 title1">Title 1</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed
          distinctio, obcaecati non natus eligendi hic sint sapiente quia minus
          est expedita, nobis ullam! Illo ex voluptatem doloribus sed ad!
        </p>
      </div>
      <div className="ratio-16x9 ratio">
        <iframe
          className="m"
          // src={videoUrl}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
    </div>
  );
}
