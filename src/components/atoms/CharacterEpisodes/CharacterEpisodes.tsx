import * as React from "react";
import { memo } from "react";
import "./index.css";

export const CharacterEpisodes = memo(() => {
  return (
    <div className="character-episodes">
      <h3 className="character-episode-title">Episodes</h3>
      <dl className="character-episode-list">
        <a href="#">
          <dt>S01E01</dt>
          <dd>Pilot</dd>
          <dd>December 2, 2013</dd>
        </a>
        <a href="#">
          <dt>S01E02</dt>
          <dd>Lawnmower Dog</dd>
          <dd>December 9, 2013</dd>{" "}
        </a>
        <a href="#">
          <dt>S01E03</dt>
          <dd>Anatomy Park</dd>
          <dd>December 16, 2013</dd>
        </a>
        <a href="#">
          <dt>S01E04</dt>
          <dd>M. Night Shaym-Aliens!</dd>
          <dd>January 13, 2014</dd>
        </a>
      </dl>
    </div>
  );
});
