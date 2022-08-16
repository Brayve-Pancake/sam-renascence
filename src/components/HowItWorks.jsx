import Carousel from "react-bootstrap/Carousel";
import "../scss/howItWorks.scss";
import BookBtn from "./BookBtn";
import CarouselDynamic from "./CarouselDynamic";

import { AdvancedImage } from "@cloudinary/react";

import { useMediaQuery } from "react-responsive";

export default function HowItWorks({ brosBeingBros, quoteImg1, quoteImg2 }) {
  const md = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  const xl = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  function numCarouselImg() {}
  return (
    <div id="howItWorks" className="howItWorks jumptarget">
      <hr></hr>
      <h1 className="title">Coaching Package</h1>
      <p className="sub-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed
        distinctio, obcaecati non natus eligendi hic sint sapiente quia minus
        est expedita, nobis ullam! Illo ex voluptatem doloribus sed ad!
      </p>
      <ul className="howItWorks-ul">
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
        <li className="sub-text">Lorem ipsum dolor sit amet.</li>
      </ul>
      <BookBtn />
      <hr></hr>
      {/* <Carousel indicators={false} interval={null}>
        <Carousel.Item direction="horizontal">
          <div className="carousel-img-container">
            <AdvancedImage className="d-block" cldImg={brosBeingBros} />
            <AdvancedImage className="d-block" cldImg={quoteImg1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <AdvancedImage className="d-block" cldImg={quoteImg1} />
        </Carousel.Item>
        <Carousel.Item>
          <AdvancedImage className="d-block" cldImg={quoteImg2} />
        </Carousel.Item>
      </Carousel> */}
      <CarouselDynamic
        brosBeingBros={brosBeingBros}
        quoteImg1={quoteImg1}
        quoteImg2={quoteImg2}
        md={md}
      />
    </div>
  );
}
