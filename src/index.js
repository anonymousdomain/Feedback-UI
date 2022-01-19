import reactDom from "react-dom";
import React from "react";
import App from './App'
import './index.css'
reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
