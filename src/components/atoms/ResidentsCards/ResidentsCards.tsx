import * as React from "react";
import { memo } from "react";
import "./index.css";
import locationCharacters from "../../../images/locationCharacters.png";

export const ResidentsCards = memo(() => (
  <div className="characters-cards-wrapper">
    <div className="residents-cards">
      <div className="residents-card">
        <img src={locationCharacters} className="location-pic" />
        Rick Sanchez
      </div>
    </div>
  </div>
));
