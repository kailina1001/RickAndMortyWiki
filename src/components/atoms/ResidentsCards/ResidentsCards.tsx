import * as React from "react";
import { memo, useEffect } from "react";
import "./index.css";
import locationCharacters from "../../../images/locationCharacters.png";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { getCharacterAction } from "../../../core";
import { CharacterImg } from "../CharacterImg";
import { Link } from "react-router-dom";
import { CharacterName } from "../CharacterName";
import { CharacterSpecies } from "../CharacterSpecies";

export const ResidentsCards = memo(() => {
  const dispatch = useDispatch();

  const { characters } = useSelector(getSerialState);

  return (
    <div className="characters-cards-wrapper">
      {characters?.map((characters) => (
        <div key={characters.id} className="residents-cards">
          <Link className="for-link" to={`/character/${characters.id}`}>
            <div className="residents-card">
              <CharacterImg image={characters.image} />
              <CharacterName name={characters.name} />
              <CharacterSpecies species={characters.species} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});

/* {
  characters?.map((characters) => (
    <div key={characters.id}>
      <Link className="for-link" to={`/character/${characters.id}`}>
        <div className="residents-card">
          <CharacterImg image={characters.image} />
          <CharacterName name={characters.name} />
          <CharacterSpecies species={characters.species} />
        </div>
      </Link>
    </div>
  ));
} */

{
  /* <div className="characters-cards-wrapper">
        <div className="residents-cards">
          <div className="residents-card">
            <img src={locationCharacters} className="location-pic" />
            Rick Sanchez
          </div>
        </div>
      </div> */
}
