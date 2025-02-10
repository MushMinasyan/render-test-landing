// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GenerateStepsContainer from "./components/generateStepsContainer";
import GenerateSection from "./components/generateSection";
import CharactersSection from "./components/charactersSection";
import PopularSection from "./components/popularSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GenerateStepsContainer />
      <GenerateSection />
      <CharactersSection />
      <PopularSection />
    </>
  );
};

export default App;
