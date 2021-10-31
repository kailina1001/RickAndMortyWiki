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
  let [charactersNames, setcharactersNames] = useState("");
  let [characterImg, setcharacterImg] = useState("");
  let [characterSpecies, setcharacterSpecies] = useState("");
  let [characterId, setCharacterId] = useState("");
  useEffect(() => {
    character.map((item) =>
      fetch(item)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setcharactersNames((charactersNames += "&" + result.name));
            setCharacterId((characterId += "&" + result.id));
            setcharacterImg((characterImg += "&" + result.image));
            setcharacterSpecies((characterSpecies += "&" + result.species));
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
      <div className="characters-cards-wrapper">
        {character?.map((item, index) => (
          <Link
            className="for-link"
            to={`/character/${createArray(characterId)[index]}`}
          >
            <div className="doItBlock">
              <img src={createArray(characterImg)[index]} className="someImg" />
              <p className="character-episode-item-text">
                {createArray(charactersNames)[index]}
              </p>
              <p className="spic">{createArray(characterSpecies)[index]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});
