import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Zoom from "./components/Zoom/Zoom"
import MyZoomPat from "./components/ZoomPat/zoomPat";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "col"}}>
      <Navbar />
      <MyZoomPat/>
    </div>
  );
}

export default App;
