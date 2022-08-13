import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../scss/testamonials.scss";
import waitingRoom from "../assets/res-waitingRoom.png";

export default function Testamonials() {
  return (
    <div className="testamonials">
      <Carousel className="testamonials-carousel" interval={null}>
        <Carousel.Item>
          <Card bsPrefix="remove-defaults">
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, adipiscing elit. Integer posuere a ante. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante. Lorem ipsum dolor amet, consectetur adipiscing
                elit. Integer posuere erat a ante.
              </p>
              <p className="blockquote-footer">
                <span className="name">Joshua Bray</span>
              </p>{" "}
            </blockquote>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bsPrefix="remove-defaults">
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, adipiscing elit. Integer posuere a ante. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante. Lorem ipsum dolor amet, consectetur adipiscing
                elit. Integer posuere erat a ante.
              </p>
              <p className="blockquote-footer">
                <span className="name">Joshua Bray</span>
              </p>{" "}
            </blockquote>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bsPrefix="remove-defaults">
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, adipiscing elit. Integer posuere a ante. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante. Lorem ipsum dolor amet, consectetur adipiscing
                elit. Integer posuere erat a ante.
              </p>
              <p className="blockquote-footer">
                <span className="name">Joshua Bray</span>
              </p>{" "}
            </blockquote>
          </Card>
        </Carousel.Item>
      </Carousel>
      <hr></hr>
      <div className="image-container">
        <img src={waitingRoom}></img>
      </div>
    </div>
  );
}
