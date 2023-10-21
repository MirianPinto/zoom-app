import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Zoom from "./components/Zoom/Zoom"

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "col"}}>
      <Navbar />
      <Zoom/>
    </div>
  );
}

export default App;
