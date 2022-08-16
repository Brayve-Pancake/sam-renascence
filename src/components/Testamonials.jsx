// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../scss/testamonials.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testamonials() {
  return (
    <div className="testamonials">
      <hr></hr>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        dotListClass
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          mobile: {
            breakpoint: {
              max: 576,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 992,
              min: 576,
            },
            items: 2,
            partialVisibilityGutter: 0,
          },
          desktop: {
            breakpoint: {
              max: 5000,
              min: 992,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="carousel-unsplash">
          <Card bsPrefix="remove-defaults add-flex">
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
        </div>
        <div className="carousel-unsplash">
          <Card bsPrefix="remove-defaults add-flex">
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, adipiscing elit.
              </p>
              <p className="blockquote-footer">
                <span className="name">Joshua Bray</span>
              </p>{" "}
            </blockquote>
          </Card>
        </div>
        <div className="carousel-unsplash">
          <Card bsPrefix="remove-defaults add-flex">
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
        </div>
      </Carousel>
      <hr></hr>
    </div>
  );
}
