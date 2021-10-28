import * as React from "react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacterAction } from "../../../core";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { CharacterImg } from "../CharacterImg";
import { CharacterName } from "../CharacterName";
import { CharacterSpecies } from "../CharacterSpecies";
import "./index.css";

interface IMainCharacter {
  mainCharacter: any;
}

export const MainCharactersList = memo(({ mainCharacter }: IMainCharacter) => {
  const dispatch = useDispatch();
  const { character } = useSelector(getSerialState);
  console.log(character);

  useEffect(() => {
    dispatch(getCharacterAction(mainCharacter));
  }, [dispatch, mainCharacter]);

  return (
    <div className="main-characters-cards">
      {character
        ?.map((character) => (
          <div key={character.id}>
            <Link className="for-link" to={"/character/" + character.id}>
              <div className="some-card">
                <CharacterImg image={character.image} />
                <CharacterName name={character.name} />
                <CharacterSpecies species={character.species} />
              </div>
            </Link>
          </div>
        ))
        .slice(0, 5)}
    </div>
  );
});
