import {
  NavbarResponsive,
  Welcome,
  Testamonials,
  HowItWorks,
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
      <HowItWorks />
      {/* <Carousel2 /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
