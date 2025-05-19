import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Propos from "./components/Propos";
import Competence from "./components/Competence";
import Experience from "./components/Experience";
import Etudes from "./components/Etudes";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Propos />
	  <Competence />
      <Experience />
      <Etudes />
      <Projet />
      <Contact />
    </>
  );
}

export default App;
