import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-styles.css";
import { HomeClass } from "./templates/HomeClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeClass numberToIncrement={10} />
  </React.StrictMode>
);
