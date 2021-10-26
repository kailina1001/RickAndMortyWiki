import * as React from "react";
import { memo } from "react";
import "./index.css";
import locationCharacters from "../../../images/locationCharacters.png";

export const CastCards = memo(() => (
  <div className="characters-cards-wrapper">
    <div className="casts-cards">
      <div className="cast-card">
        <img src={locationCharacters} className="location-pic" />
        Rick Sanchez
      </div>
    </div>
  </div>
));
