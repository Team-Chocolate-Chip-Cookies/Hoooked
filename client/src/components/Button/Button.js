import React from "react";
import "./Button.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg btn-primary", `btn-${type}`, "center", className].join(" ")}
  >
    {children}
  </button>
);

export default Button;
