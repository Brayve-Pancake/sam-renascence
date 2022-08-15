import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
  Pricing,
  Contact,
  // Footer,
} from "./components/index";

import waitingRoom from "./assets/res-waitingRoom.png";

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
      <div className="image-container">
        <p className="image-text">
          Are you waiting for your life to be fixed before you fix your life?
        </p>
      </div>
      <HowItWorks myImage={myImage} />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
