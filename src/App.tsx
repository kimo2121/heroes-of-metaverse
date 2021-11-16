import React from "react";
import "./App.css";
import DevelopmentRoadmap from "./components/DevelopmentRoadmap";
import Exclusive from "./components/Exclusive/Exclusive";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Specs from "./components/Specs/Specs";
import Welcome from "./components/Welcome/Welcome";
import CustomizedAccordions from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import OurTeam from "./components/OurTeam/OurTeam";
import Guests from "./components/Guests/Guests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner"></div>
      <Welcome />
      <Exclusive />
      <Guests />
      <Roadmap />
      <DevelopmentRoadmap />
      <Specs />
      <OurTeam />
      <CustomizedAccordions />
      <div className="party-never">
        <h2>THE PARTY NEVER STOPS</h2>
        <h1>Get Aped with Us! Join our Discord</h1>
        <Button text="LET'S START" className="lets-start" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
