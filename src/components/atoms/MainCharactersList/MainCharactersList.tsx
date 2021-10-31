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
  const { characters } = useSelector(getSerialState);

  useEffect(() => {
    dispatch(getCharacterAction(mainCharacter));
  }, [dispatch, mainCharacter]);

  return (
    <div className="main-characters-cards">
      {characters
        ?.map((characters) => (
          <div key={characters.id}>
            <Link className="for-link" to={"/character/" + characters.id}>
              <div className="some-card">
                <CharacterImg image={characters.image} />
                <CharacterName name={characters.name} />
                <CharacterSpecies species={characters.species} />
              </div>
            </Link>
          </div>
        ))
        .slice(0, 5)}
    </div>
  );
});
