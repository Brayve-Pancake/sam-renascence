import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  // Carousel1,
  // HowItWorks,
  // Carousel2,
  // Pricing,
  // Contact,
  // Footer,
} from "./components/index";
// maybe use star

function App() {
  return (
    <div className="App">
      <NavbarResponsive />
      <Welcome />
      <Testamonials />
      {/* <Carousel1 />
      <HowItWorks />
      <Carousel2 />
      <Pricing />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
