import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
  Pricing,
  Contact,
  // Footer,
} from "./components/index";

import { Cloudinary } from "@cloudinary/url-gen";

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sam-renascence",
    },
  });

  const brosBeingBros = cld.image("images/bros-being-bros-1_jaefql");
  const quoteImg1 = cld.image("images/quote-img-1-1_v2uqst");
  const quoteImg2 = cld.image("images/quote-img-2-1_eutrx4");
  const waitingYellow = cld.image("images/waiting-yellow_xnswzh");
  const salamLogo = cld.image("images/salamander-transparent_y1wwpe");

  return (
    <div className="App">
      <NavbarResponsive salamLogo={salamLogo} quoteImg1={quoteImg1} />
      <Welcome />
      <Testamonials />
      <div className="image-container">
        <p className="image-text">
          Are you waiting for your life to be fixed before you fix your life?
        </p>
      </div>
      <HowItWorks
        brosBeingBros={brosBeingBros}
        quoteImg1={quoteImg1}
        quoteImg2={quoteImg2}
      />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
