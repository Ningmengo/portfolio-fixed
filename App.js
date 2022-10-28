import Home from "./component/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import "./App.css";
import Blizzard from "./component/gamePlat/blizzard/Blizzard";
import Steam from "./component/gamePlat/steam/Steam";
import Riot from "./component/gamePlat/riot/Riot";
// import { Provider } from "react-redux";
// import store from "./component/gamePlat/store";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "App-lightTheme" : "App"}>
      {/* <Provider store={store}> */}
      <Router>
        <NavBar isActive={isActive} setIsActive={setIsActive} />

        <Routes>
          <Route
            exact
            path="/portfolio-fixed"
            element={<Home isActive={isActive} />}
          ></Route>
          <Route exact path="/Blizzard" element={<Blizzard />}></Route>
          <Route exact path="/Steam" element={<Steam />}></Route>
          <Route exact path="/Riot" element={<Riot />}></Route>
        </Routes>
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
