import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar ${props.mode}`}>
      <ul>
        <li>
          <a href="#">{props.title}</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <button className="btn" onClick={props.Toggle}>
          Dark/Light
        </button>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: "Set title here",
};
