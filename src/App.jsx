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
      <NavbarResponsive />
      <Welcome />
      <Testamonials />
      <HowItWorks myImage={myImage} />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
