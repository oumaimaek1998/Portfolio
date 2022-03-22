import { useRef } from "react";

import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

import { RefProvider } from "./context/RefContext/RefContext";

const App = () => {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refExperiences = useRef(null);
  const refSkills = useRef(null);

  return (
    <RefProvider value={{ refHome, refAbout, refExperiences, refSkills }}>
      <Header />
      <HomePage />
      <About />
      <Experiences />
      <Skills />
      <Footer />
    </RefProvider>
  );
};

export default App;
