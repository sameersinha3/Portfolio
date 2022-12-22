import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';
import ProjectDescriptions from "./components/ProjectDescriptions";


export default function App() {
  return (
    <main className="body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      
    </main>
  );
}
