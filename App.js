import Home from "./component/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import "./App.css";
import Blizzard from "./component/blizzard/Blizzard";
import Steam from "./component/steam/Steam";
import Riot from "./component/riot/Riot";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "App-lightTheme" : "App"}>
      <Router>
        <NavBar isActive={isActive} setIsActive={setIsActive} />

        <Routes>
          <Route exact path="/" element={<Home isActive={isActive} />}></Route>
          <Route exact path="/Blizzard" element={<Blizzard />}></Route>
          <Route exact path="/Steam" element={<Steam />}></Route>
          <Route exact path="/Riot" element={<Riot />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
