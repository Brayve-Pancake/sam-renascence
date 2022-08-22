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
                “If you're reading this and wondering what you could get from
                coaching, you will be pleasantly surprised at just how wide an
                array of skills Sam can help you with. I contacted Sam following
                a personal recommendation. One open and honest conversation with
                this man was all I needed to reassure myself I was in safe
                hands; we got on instantly.”
              </p>
              <p className="blockquote-footer">
                <span className="name">Brother Joshua</span>
              </p>{" "}
            </blockquote>
          </Card>
        </div>
        <div className="carousel-unsplash">
          <Card bsPrefix="remove-defaults add-flex">
            <blockquote className="blockquote">
              <p>
                “I always felt supported and free to take tangents during our
                sessions. Sam would take notes and send me a summary
                post-session. I've always kept a diary, but having sessions with
                Sam was like having a diary that talks to you, sends you
                reminders and appreciates you and your choices.”
              </p>
              <p className="blockquote-footer">
                <span className="name">Anonymous Bro</span>
              </p>{" "}
            </blockquote>
          </Card>
        </div>
        <div className="carousel-unsplash">
          <Card bsPrefix="remove-defaults add-flex">
            <blockquote className="blockquote">
              <p>
                “Sam and I would check in at a holistic level, then focus on the
                current topic of my choice: Values, Purpose, Employment or
                Stress Management. My life changes a lot! Yet somehow, Sam was
                always ready with stoic quotes, stories and life lessons to help
                me figure out my path through life's challenges.”
              </p>
              <p className="blockquote-footer">
                <span className="name">Bro Joe</span>
              </p>{" "}
            </blockquote>
          </Card>
        </div>
      </Carousel>
      <hr></hr>
    </div>
  );
}
