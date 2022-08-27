import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
