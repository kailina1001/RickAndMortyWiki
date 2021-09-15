import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import locationCharacters from "../../../images/locationCharacters.png";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { CharacterEpisodes } from "../../atoms/CharacterEpisodes";

export const SelectedEpisode = memo(() => {
  return (
    <div className="selected-episode-wrapper">
      <div className="selected-episode-header">
        <button className="selected-episode-btn">Go back</button>
        <img src={locationCharacters} className="episode-pic" />
        <Title title={"Rick Sanchez"} />
      </div>
      <div className="selected-episode-info"></div>
    </div>
  );
});
