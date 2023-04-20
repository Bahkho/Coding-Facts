import React from "react";
import img from "./react-icon-small.png";

export default function Header(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src={img} alt="logo" />
      <h3 className="nav--logo_text">CodingFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
