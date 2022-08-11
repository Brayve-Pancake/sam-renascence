import { useState } from "react";
import "./App.css";
import C1Welcome from "./components/C1Welcome";
import NavbarResponsive from "./components/NavbarResponsive";

function App() {
  return (
    <div className="App">
      <NavbarResponsive />
      <C1Welcome />
    </div>
  );
}

export default App;
