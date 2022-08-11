import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../scss/testamonials.scss";

export default function Testamonials() {
  return (
    <div className="container px-4 mt-3">
      <Carousel>
        <Carousel.Item interval={10000}>
          <Card bsPrefix="test-card" variant="dark">
            <Card.Header className="display-6 title1">Testamonials</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-5 mx-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">Joshua Bray</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Carousel.Item>
        {/* <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              sed distinctio, obcaecati non natus eligendi hic sint sapiente
              quia minus est expedita, nobis ullam! Illo ex voluptatem doloribus
              sed ad!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              sed distinctio, obcaecati non natus eligendi hic sint sapiente
              quia minus est expedita, nobis ullam! Illo ex voluptatem doloribus
              sed ad!
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
