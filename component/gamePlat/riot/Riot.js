import React from "react";
import "./Riot.css";

const Riot = () => {
  return (
    <div className="currentPage-Riot">
      <div className="contentPage-Riot">
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

        <div className="new-content">
          <div className="header-LOL">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/degndao-3803ac5c-8d3b-4205-bdac-17e03fb712dd.png/v1/fill/w_436,h_491,strp/lol_jungle_icon_by_divoras_degndao-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDkxIiwicGF0aCI6IlwvZlwvMmVjOTcwZjQtMTcwNi00OTE1LTlhOTMtNDFmM2Q5YzgyMDJjXC9kZWduZGFvLTM4MDNhYzVjLThkM2ItNDIwNS1iZGFjLTE3ZTAzZmI3MTJkZC5wbmciLCJ3aWR0aCI6Ijw9NDM2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1QIU7-OGEaPcDPPJbvgfZ1GiMiqTUk3MZsXimMqpK2E"
              className="jgIcon"
              alt="jgIcon"
            />
            <h1 className="h1-1">Jungle</h1>
          </div>

          <iframe
            title="iframeOfLOL"
            src="https://app.mobalytics.gg/lol/profile/na/ningmengoo/overview"
            className="iframeOfLOL"
          />
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Riot;
