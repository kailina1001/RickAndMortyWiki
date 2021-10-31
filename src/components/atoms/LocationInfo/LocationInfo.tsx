import * as React from "react";
import { memo, useEffect, useState } from "react";
import "./index.css";
import { ResidentsCards } from "../ResidentsCards";
import { CharactersCard } from "../CharactersCard";
import { Link } from "react-router-dom";

interface ILocationInfo {
  character: string[];
}

export const LocationInfo = memo(({ character }: ILocationInfo) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [charactersNames, setСharactersNames] = useState("");
  let [characterImg, setСharacterImg] = useState("");
  let [characterSpecies, setСharacterSpecies] = useState("");
  let [characterId, setCharacterId] = useState("");
  useEffect(() => {
    character.map((item) =>
      fetch(item)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCharacterId((characterId += "&" + result.id));
            setСharactersNames((charactersNames += "&" + result.name));
            setСharacterImg((characterImg += "&" + result.image));
            setСharacterSpecies((characterSpecies += "&" + result.species));
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
    <div className="selected-location-info">
      <p className="residents-title">Residents</p>
      <div className="container residents-cards-wrapper">
        {character?.map((item, index) => (
          <Link
            className="for-link"
            to={`/character/${createArray(characterId)[index]}`}
          >
            <div className="selected-resident-card">
              <img
                src={createArray(characterImg)[index]}
                className="selected-resident-card-img"
              />
              <p>{createArray(charactersNames)[index]}</p>
              <p>{createArray(characterSpecies)[index]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});
