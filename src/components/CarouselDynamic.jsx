import "../scss/howItWorks.scss";
import "../scss/carouselDynamic.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AdvancedImage } from "@cloudinary/react";

export default function CarouselDynamic({
  brosBeingBros,
  quoteImg1,
  quoteImg2,
  md,
}) {
  return (
    <div className="carouselDynamic">
      <Carousel
        additionalTransfrom={0}
        arrows={md}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        dotListClass
        draggable={false}
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
          <AdvancedImage cldImg={brosBeingBros} />
        </div>
        <div className="carousel-unsplash">
          <AdvancedImage cldImg={quoteImg1} />
        </div>
        <div className="carousel-unsplash">
          <AdvancedImage cldImg={quoteImg2} />
        </div>
      </Carousel>
    </div>
  );
}
