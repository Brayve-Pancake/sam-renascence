import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
  Pricing,
  Contact,
  // Footer,
} from "./components/index";

function App() {
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
      <HowItWorks />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
