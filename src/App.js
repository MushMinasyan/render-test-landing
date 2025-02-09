// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GenerateStepsContainer from "./components/generateStepsContainer";
import GenerateSection from "./components/generateSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GenerateStepsContainer />
      <GenerateSection />
    </>
  );
};

export default App;
