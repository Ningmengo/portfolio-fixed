import React from "react";
import "../riot/Riot.css";

const Riot = () => {
  return (
    <div className="currentPage">
      <div className="contentPage">
        <img
          className="Icon-Riot"
          alt="Icon of Riot"
          src="https://img.icons8.com/nolan/512/riot-games.png"
        />
        <img
          className="Icon-LOL"
          alt="Icon of OW2"
          src="https://img.opencritic.com/game/9751/0jhjpI1l.jpg "
        />

        <div className="content">This is the content</div>
      </div>
    </div>
  );
};

export default Riot;
