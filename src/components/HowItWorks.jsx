import Carousel from "react-bootstrap/Carousel";
import "../scss/howItWorks.scss";
import BookBtn from "./BookBtn";

import { AdvancedImage } from "@cloudinary/react";

export default function HowItWorks({ brosBeingBros, quoteImg1, quoteImg2 }) {
  return (
    <div id="howItWorks" className="howItWorks jumptarget">
      <hr></hr>
      <h1 className="title">Coaching Package</h1>
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
      <BookBtn />
      <hr></hr>
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <AdvancedImage className="d-block w-100" cldImg={brosBeingBros} />
        </Carousel.Item>
        <Carousel.Item>
          <AdvancedImage className="d-block w-100" cldImg={quoteImg1} />
        </Carousel.Item>
        <Carousel.Item>
          <AdvancedImage className="d-block w-100" cldImg={quoteImg2} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
