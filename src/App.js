// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GenerateStepsContainer from "./components/generateStepsContainer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GenerateStepsContainer />
    </>
  );
};

export default App;
