import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-container">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
