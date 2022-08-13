import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
  Pricing,
  Contact,
  // Footer,
} from "./components/index";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// maybe use star

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sam-renascence",
    },
  });

  const myImage = cld.image("images/Bunny_mybcnw");

  return (
    <div className="App">
      <AdvancedImage cldImg={myImage} />
      <NavbarResponsive />
      <Welcome />
      <Testamonials />
      <HowItWorks />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
