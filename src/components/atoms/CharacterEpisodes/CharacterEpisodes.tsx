import * as React from "react";
import { memo } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { ILocation } from "../../../types/location";

interface ICharacterEpisodes {
  episode: string;
  name: string;
  air_date: string;
}

export const CharacterEpisodes = memo(
  ({ episode, name, air_date }: ICharacterEpisodes) => {
    return (
      <div className="character-episodes">
        <h3 className="character-episode-title">Episodes</h3>
        <dl className="character-episode-list">
          <Link className="for-link" to={"/episode"}>
            <dt> {episode}</dt>
            <dd> {name}</dd>
            <dd> {air_date}</dd>
          </Link>
        </dl>
      </div>
    );
  }
);

{
  /* <dt>S01E01 {episode}</dt>
            <dd>Pilot {name}</dd>
            <dd>December 2, 2013 {air_date}</dd> */
}
