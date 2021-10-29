import * as React from "react";
import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  IEpisodeCharacter,
  ILocationCharacter,
} from "../../../types/character";

interface ICharaterInfo {
  gender: string;
  status: string;
  species: string;
  origin: IEpisodeCharacter;
  type: string;
  location: ILocationCharacter;
  episode: string[];
  character: any;
}

export const CharacterInfo = memo(
  ({
    gender,
    status,
    species,
    origin,
    type,
    location,
    episode,
    character,
  }: ICharaterInfo) => {
    return (
      <div className="selected-character-info">
        <div className="character-information">
          <h3 className="character-info-title">Informations</h3>
          <dl className="character-info-list">
            <dt>Gender</dt>
            <dd>{gender}</dd>
            <dt>Status</dt>
            <dd>{status}</dd>
            <dt>Species</dt>
            <dd>{species}</dd>
            <dt>Origin</dt>
            <dd> {origin.name}</dd>
            <dt>Type</dt>
            <dd>{type}</dd>
            <Link className="for-link" to={"/location"}>
              <dt>Location</dt>
              <dd>{location.name}</dd>
            </Link>
          </dl>
        </div>
        <div className="character-episodes">
          <h3 className="character-episode-title">Episodes</h3>
          <dl className="character-episode-list">
            <Link className="for-link" to={`/episode/${character.id}`}>
              {/* //!!!!!!!!выдаёт id персонажа, а не эпизода */}
              <dt>Episodes</dt>
              <dd className="character-episodes-card"> {episode}</dd>
            </Link>
          </dl>
        </div>
      </div>
    );
  }
);
