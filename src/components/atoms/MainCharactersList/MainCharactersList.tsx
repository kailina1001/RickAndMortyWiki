import * as React from "react";
import { memo } from "react";
import "./index.css";

export const MainCharactersList = memo(() => (
  <div className="main-characters-cards">
    <div className="some-card"> Rick Sanchez</div>
    <div className="some-card"> Morty Smith</div>
    <div className="some-card"> Beth Smith</div>
    <div className="some-card"> Jerry Smith</div>
    <div className="some-card"> Summer Smith</div>
  </div>
));
