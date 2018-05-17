import React from "react";
import "./UserContainer.css";
import { Col, Row, Container } from "../../components/Grid";

// This Container component allows us to use a bootstrap container without worrying about class names
export const UserContainer = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

export default UserContainer;