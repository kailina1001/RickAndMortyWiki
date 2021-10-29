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
}

export const CharacterInfo = memo(
  ({ gender, status, species, origin, type, location }: ICharaterInfo) => {
    return (
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
    );
  }
);
