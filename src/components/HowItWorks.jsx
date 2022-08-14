import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import bros from "../assets/res-bros.png";
import "../scss/howItWorks.scss";

import { AdvancedImage } from "@cloudinary/react";

export default function HowItWorks(props) {
  return (
    <div id="howItWorks" className="howItWorks jumptarget">
      <hr></hr>
      <h1 className="title">Coaching package</h1>
      <p className="sub-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed
        distinctio, obcaecati non natus eligendi hic sint sapiente quia minus
        est expedita, nobis ullam! Illo ex voluptatem doloribus sed ad!
      </p>
      <ul>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
      </ul>
      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
      <hr></hr>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <AdvancedImage className="d-block w-100" cldImg={props.myImage} />

          {/* <img className="d-block w-100" src={bros} alt="First slide" /> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bros} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bros} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
