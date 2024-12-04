import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import global styles
import App from "./App";

// Find the root element in the HTML file
const rootElement = document.getElementById("root");

// Ensure the root element exists and render the React app
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error(
    'Root element not found. Ensure there is a div with id="root" in your HTML.'
  );
}
