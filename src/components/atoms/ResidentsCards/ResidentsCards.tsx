import * as React from "react";
import { memo } from "react";
import "./index.css";
import locationCharacters from "../../../images/locationCharacters.png";

export const ResidentsCards = memo(() => (
  <div className="characters-cards-wrapper">
    <div className="characters-cards">
      <div className="character-card">
        {" "}
        <img src={locationCharacters} className="location-pic" />
        Rick Sanchez
      </div>
      <div className="character-card">
        {" "}
        <img src={locationCharacters} className="location-pic" />
        Morty Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Beth Smith
      </div>
      <div className="character-card">
        {" "}
        <img src={locationCharacters} className="location-pic" />
        Jerry Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Summer Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Rick Sanchez
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Morty Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Beth Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Jerry Smith
      </div>
      <div className="character-card">
        <img src={locationCharacters} className="location-pic" /> Summer Smith
      </div>
    </div>
  </div>
));
