import * as React from "react";
import { memo, useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  IEpisodeCharacter,
  ILocationCharacter,
} from "../../../types/character";
import loading from "../../images/loading.gif";

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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let [names, setNames] = useState("");
    let [episodeNum, setEpisodeNum] = useState("");
    let [episodeDate, setEpisodeDate] = useState("");
    let [episodeId, setEpisodeId] = useState("");
    useEffect(() => {
      episode.map((item) =>
        fetch(item)
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setNames((names += "&" + result.name));
              setEpisodeNum((episodeNum += "&" + result.episode));
              setEpisodeDate((episodeDate += "&" + result.air_date));
              setEpisodeId((episodeId += "&" + result.id));
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      );
    }, []);

    function createArray(str: string) {
      let newArray = str
        .split("&")
        .filter((item, index, arr) => arr.indexOf(item) == index)
        .slice(1);
      return newArray;
    }
    return (
      <div className="selected-character-info">
        <div className="character-information">
          <h3 className="character-info-title">Information</h3>
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
            <div className="arrow-link">
              <Link className="for-link" to={"/location/"}>
                <dt>Location</dt>
                <dd>{location.name}</dd>
              </Link>
            </div>
          </dl>
        </div>
        <div className="character-episodes">
          <h3 className="character-episode-title">Episodes</h3>
          <div className="character-episode-list">
            {episode.map((item, index) => {
              return (
                <div className="character-episode-item arrow-link">
                  <Link
                    className="for-link"
                    to={`/episode/${createArray(episodeId)[index]}`}
                  >
                    <h2 className="character-episode-item-title">
                      {createArray(episodeNum)[index]}
                    </h2>
                    <p className="character-episode-item-text">
                      {createArray(names)[index]}
                    </p>
                    <p className="character-episode-item-text">
                      {createArray(episodeDate)[index]}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);
