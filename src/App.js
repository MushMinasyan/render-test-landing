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
import MoreSection from "./components/moreSection";
import FaqSection from "./components/faqSection";
import FooterSubScrip from "./components/footerSubScrip";
import Footer from "./components/Footer";
import "./styles/media.css";
import "./styles/App.css";
import FooterSocial from "./components/footerSocial";
const App = () => {
  return (
    <>
      <main className="main-wrap">
        <Navbar />
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
        <footer>
          <FooterSubScrip />
          <Footer />
          <FooterSocial />
        </footer>
      </main>
    </>
  );
};

export default App;
