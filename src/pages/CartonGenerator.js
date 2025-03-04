import React from "react";
import Hero from "../components/hero";
import GenerateStepsContainer from "../components/generateStepsContainer";
import GenerateSection from "../components/generateSection";
import CharactersSection from "../components/charactersSection";
import PopularSection from "../components/popularSection";
import AdvantagesSection from "../components/advantagesSection";
import Innovative from "../components/innovative";
import Review from "../components/review";
import MoreSection from "../components/moreSection";
import FaqSection from "../components/faqSection";
import "../styles/App.css";
const CartonGenerator = () => {
  return (
    <>
      <Hero />
      <GenerateStepsContainer />
      <GenerateSection />
      <CharactersSection />
      <PopularSection />
      <AdvantagesSection />
      <Innovative />
      <Review />
      <MoreSection />
      <FaqSection />
    </>
  );
};

export default CartonGenerator;
