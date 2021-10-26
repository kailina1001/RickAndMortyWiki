import * as React from "react";
import { memo } from "react";
import "./index.css";

export const CharacterInfo = memo(() => {
  return (
    <div className="character-information">
      <h3 className="character-info-title">Informations</h3>
      <dl className="character-info-list">
        <dt>Gender</dt>
        <dd>Male</dd>
        <dt>Status</dt>
        <dd>Alive</dd>
        <dt>Specie</dt>
        <dd>Human</dd>
        <dt>Origin</dt>
        <dd>Earth (C-137)</dd>
        <dt>Type</dt>
        <dd>Unknown</dd>
        <a href="#">
          <dt>Location</dt>
          <dd>Earth (Replacement Dimension)</dd>
        </a>
      </dl>
    </div>
  );
});
