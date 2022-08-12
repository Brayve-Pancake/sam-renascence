import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import bros from "../assets/res-bros.png";
import "../scss/howItWorks.scss";

export default function HowItWorks() {
  return (
    <div className="container px-4 mt-3 container1">
      <hr></hr>
      <h1 className="display-6 title1">Coaching package</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed
        distinctio, obcaecati non natus eligendi hic sint sapiente quia minus
        est expedita, nobis ullam! Illo ex voluptatem doloribus sed ad!
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
      <hr></hr>
      <Carousel interval={null}>
        <Carousel.Item>
          <img className="d-block w-100" src={bros} alt="First slide" />
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
