import Home from "./component/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "App-lightTheme" : "App"}>
      <Router>
        <NavBar isActive={isActive} setIsActive={setIsActive} />
        <Routes>
          <Route exact path="/" element={<Home isActive={isActive} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
