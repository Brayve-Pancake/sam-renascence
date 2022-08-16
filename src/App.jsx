import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
  Pricing,
  Contact,
  Footer,
  CarouselDynamic,
} from "./components/index";

import { Cloudinary } from "@cloudinary/url-gen";

import { useMediaQuery } from "react-responsive";

function App() {
  // MediaQuery for breakpoints (Same as BootStrap defaults)

  const md = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  // const lg = useMediaQuery({
  //   query: "(min-device-width: 992px)",
  // });
  const xl = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  // Cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sam-renascence",
    },
  });
  const brosBeingBros = cld.image("images/bros-being-bros-1_jaefql");
  const quoteImg1 = cld.image("images/quote-img-1-1_v2uqst");
  const quoteImg2 = cld.image("images/quote-img-2-1_eutrx4");
  const yellowWait = cld.image("images/waitingYellow-text-1_lylozd");
  const salamLogo = cld.image("images/salamander-transparent_y1wwpe");

  return (
    <div className="App">
      <NavbarResponsive salamLogo={salamLogo} quoteImg1={quoteImg1} />
      <Welcome md={md} xl={xl} />
      <Testamonials />
      {!xl && (
        <div className="image-container">
          <p className="image-text">
            Are you waiting for your life to be fixed before you fix your life?
          </p>
        </div>
      )}
      <HowItWorks
        brosBeingBros={brosBeingBros}
        quoteImg1={quoteImg1}
        quoteImg2={quoteImg2}
        yellowWait={yellowWait}
      />
      <CarouselDynamic
        brosBeingBros={brosBeingBros}
        quoteImg1={quoteImg1}
        quoteImg2={quoteImg2}
        md={md}
      />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
