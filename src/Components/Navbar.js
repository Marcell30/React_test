import React from "react";
import logo from "../images/react-logo.png";

export default function Nabvar() {
  return (
    <nav className="nav-flex">
      <img className="nav-logo" src={logo} />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
