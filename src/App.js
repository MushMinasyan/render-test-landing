// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GenerateStepsContainer from "./components/generateStepsContainer";
import GenerateSection from "./components/generateSection";
import CharactersSection from "./components/charactersSection";
import PopularSection from "./components/popularSection";
import AdvantagesSection from "./components/advantagesSection";
import Innovative from "./components/innovative";
import Review from "./components/review";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GenerateStepsContainer />
      <GenerateSection />
      <CharactersSection />
      <PopularSection />
      <AdvantagesSection />
      <Innovative />
      <Review />
    </>
  );
};

export default App;
