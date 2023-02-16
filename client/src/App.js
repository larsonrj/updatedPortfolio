import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return <PortfolioContainer />;
}

export default App;
