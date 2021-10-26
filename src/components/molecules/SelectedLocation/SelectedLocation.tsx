import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import locationCharacters from "../../../images/locationCharacters.png";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { CharacterEpisodes } from "../../atoms/CharacterEpisodes";
import { ResidentsCards } from "../../atoms/ResidentsCards";

export const SelectedLocation = memo(() => {
  return (
    <div className="selected-episode-wrapper">
      <div className="selected-episode-header">
        <button className="selected-episode-btn">Go back</button>
        <div>
          <div className="location-name">Earth (Replacement Dimension)</div>
          <div className="location-type">
            <dl>
              <dt>Type</dt>
              <dd>Planet</dd>
            </dl>
            <dl>
              <dt>Dimension</dt>
              <dd>Replacement Dimension</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="selected-episode-info">
        <p className="residents-title">Residents</p>
        <ResidentsCards />
      </div>
    </div>
  );
});
