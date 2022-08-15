import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import bros from "../assets/res-bros.png";
import "../scss/howItWorks.scss";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function HowItWorks() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sam-renascence",
    },
  });

  const brosBeingBros = cld.image("images/bros-being-bros-1_jaefql");
  const quoteImg1 = cld.image("images/quote-img-1-1_v2uqst");
  const quoteImg2 = cld.image("images/quote-img-2-1_eutrx4");
  const waitingYellow = cld.image("images/waiting-yellow_xnswzh");
  const salamCircle = cld.image("images/salamander-circle-yellow_ifhgxt");
  const salamLogo = cld.image("images/salamander-transparent_y1wwpe");

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
      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
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
