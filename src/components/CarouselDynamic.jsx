// import Carousel from "react-bootstrap/Carousel";
import "../scss/howItWorks.scss";
import "../scss/carouselDynamic.scss";
import BookBtn from "./BookBtn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { AdvancedImage } from "@cloudinary/react";

import { useMediaQuery } from "react-responsive";

export default function CarouselDynamic({
  brosBeingBros,
  quoteImg1,
  quoteImg2,
}) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      //   containerClass="container-with-dots"
      dotListClass="custom-dot-list-style"
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
        desktop: {
          breakpoint: {
            max: 3000,
            min: 992,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 576,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 992,
            min: 576,
          },
          items: 2,
          partialVisibilityGutter: 30,
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
      <div>
        <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
    </Carousel>
  );
  //   const md = useMediaQuery({
  //     query: "(min-device-width: 768px)",
  //   });
  //   const xl = useMediaQuery({
  //     query: "(min-device-width: 1200px)",
  //   });

  //   const responsive = {
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3,
  //       slidesToSlide: 3, // optional, default to 1.
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //       slidesToSlide: 2, // optional, default to 1.
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //       slidesToSlide: 1, // optional, default to 1.
  //     },
  //   };
  //   return (
  //     <Carousel
  //       swipeable={false}
  //       draggable={false}
  //       showDots={true}
  //       responsive={responsive}
  //       ssr={true} // means to render carousel on server-side.
  //       infinite={true}
  //     //   autoPlay={deviceType !== "mobile" ? true : false}
  //       autoPlaySpeed={1000}
  //       keyBoardControl={true}
  //       customTransition="all .5"
  //       transitionDuration={500}
  //       containerClass="carousel-container"
  //       removeArrowOnDeviceType={["tablet", "mobile"]}
  //       deviceType={this.props.deviceType}
  //       dotListClass="custom-dot-list-style"
  //       itemClass="carousel-item-padding-40-px"
  //     >
  //       <div>Item 1</div>
  //       <div>Item 2</div>
  //       <div>Item 3</div>
  //       <div>Item 4</div>
  //     </Carousel>
  //   );

  //   if (xl) {
  //     return (
  //       <Carousel indicators={false} interval={null}>
  //         <Carousel.Item direction="horizontal">
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={brosBeingBros} />
  //             <AdvancedImage className="d-block" cldImg={quoteImg1} />
  //             <AdvancedImage className="d-block" cldImg={quoteImg2} />
  //           </div>
  //         </Carousel.Item>
  //       </Carousel>
  //     );
  //   } else if (md) {
  //     return (
  //       <Carousel indicators={false} interval={null}>
  //         <Carousel.Item direction="horizontal">
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={brosBeingBros} />
  //             <AdvancedImage className="d-block" cldImg={quoteImg1} />
  //           </div>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={brosBeingBros} />
  //             <AdvancedImage className="d-block" cldImg={quoteImg2} />
  //           </div>
  //         </Carousel.Item>
  //       </Carousel>
  //     );
  //   } else
  //     return (
  //       <Carousel indicators={false} interval={null}>
  //         <Carousel.Item direction="horizontal">
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={brosBeingBros} />
  //           </div>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={quoteImg1} />
  //           </div>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <div className="carousel-img-container">
  //             <AdvancedImage className="d-block" cldImg={quoteImg2} />
  //           </div>
  //         </Carousel.Item>
  //       </Carousel>
  //     );
}
