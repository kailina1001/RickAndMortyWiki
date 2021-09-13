import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import characterPic from "../../../images/characterPic.png";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { CharacterEpisodes } from "../../atoms/CharacterEpisodes";

export const SelectedCharacter = memo(() => {
  return (
    <div className="selected-character-wrapper">
      <div className="selected-character-header">
        <button className="selected-character-btn">Go back</button>
        <img src={characterPic} className="character-pic" />
        <Title title={"Rick Sanchez"} />
      </div>
      <div className="selected-character-info">
        <CharacterInfo />
        <CharacterEpisodes />
      </div>
    </div>
  );
});
