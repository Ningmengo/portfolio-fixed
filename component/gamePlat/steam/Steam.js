import React from "react";
import "../steam/Steam.css";
import Ter_gameHour from "../../asset/gamehour_terraria.PNG";
import Ter_in_game from "../../asset/terraria-in game.PNG";

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

        <div className="content">
          <img src={Ter_gameHour} alt="terraria_game_hour" id="sectionImg" />
          <p>
            <div className="header-terraria">63.7h of game played</div>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This game was originally called
            by some of my buddies to play together, but after playing, I found
            that Terraria is really well done. First of all, it is a pixel style
            game, and there are also professional ones. Choice, which means that
            the boss can play in different ways. This game is staged. Whenever
            your ability reaches a certain level, the difficulty of the game
            will increase accordingly, and more novel and new things will be
            unlocked. As a player who has cleared the level, I can give it a
            high rating.
          </p>

          <p>Photos of the statues of all bosses in the hardest mode</p>
          <img src={Ter_in_game} alt="terraria_in_game" id="sectionImg" />
        </div>
      </div>
    </div>
  );
};

export default Steam;
