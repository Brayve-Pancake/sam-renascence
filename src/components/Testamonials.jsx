import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../scss/testamonials.scss";
import waitingRoom from "../assets/res-waitingRoom.png";

export default function Testamonials() {
  return (
    <div className="container px-0 mt-3">
      <Carousel interval={null}>
        <Carousel.Item>
          <Card bsPrefix="test-card" variant="primary">
            <Card.Body>
              <blockquote className="blockquote mb-5 mx-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <p className="blockquote-footer">
                  <span className="name">Joshua Bray</span>
                </p>{" "}
              </blockquote>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bsPrefix="test-card" variant="primary">
            <Card.Body>
              <blockquote className="blockquote mb-5 mx-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <p className="blockquote-footer">
                  <span className="name">Joshua Bray</span>
                </p>{" "}
              </blockquote>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bsPrefix="test-card" variant="primary">
            <Card.Body>
              <blockquote className="blockquote mb-5 mx-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <p className="blockquote-footer">
                  <span className="name">Joshua Bray</span>
                </p>{" "}
              </blockquote>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <div className="image-container">
        <img src={waitingRoom}></img>
      </div>
    </div>
  );
}
