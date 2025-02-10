import React from "react";

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
