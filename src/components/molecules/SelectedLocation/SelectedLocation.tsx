import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import locationCharacters from "../../../images/locationCharacters.png";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { CharacterEpisodes } from "../../atoms/CharacterEpisodes";

export const SelectedLocation = memo(() => {
  return (
    <div className="selected-location-wrapper">
      <div className="selected-location-header">
        <button className="selected-location-btn">Go back</button>
        <img src={locationCharacters} className="location-pic" />
        <Title title={"Rick Sanchez"} />
      </div>
      <div className="selected-location-info"></div>
    </div>
  );
});
