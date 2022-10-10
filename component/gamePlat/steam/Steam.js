import React from "react";
import "../steam/Steam.css";

const Steam = () => {
  return (
    <div className="currentPage-Steam">
      <div className="contentPage-Steam">
        <img
          className="Icon-Steam"
          alt="Icon of Steam"
          src="https://cdn-icons-png.flaticon.com/512/220/220223.png"
        />
        <img
          className="Icon-Terraria"
          alt="Icon of Terraria"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_3DS_Terraria.jpg "
        />

        <div className="content">This is the content</div>
      </div>
    </div>
  );
};

export default Steam;
