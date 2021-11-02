import * as React from "react";
import { memo, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CharacterName } from "../CharacterName";
import { CharacterImg } from "../CharacterImg";
import { CharacterSpecies } from "../CharacterSpecies";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { getCharacterAction } from "../../../core/actions/serialAction";

interface ICharactersCard {
  currentCharacterPage: number;
}

export const CharactersCard = memo(
  ({ currentCharacterPage }: ICharactersCard) => {
    const { characters } = useSelector(getSerialState);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCharacterAction(currentCharacterPage));
    }, [dispatch, currentCharacterPage]);

    return (
      <div className="characters-cards-wrapper">
        {characters?.map((characters) => (
          <div key={characters.id}>
            <Link className="for-link" to={`/character/${characters.id}`}>
              <div className="character-card">
                <CharacterImg image={characters.image} />
                <CharacterName name={characters.name} />
                <CharacterSpecies species={characters.species} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
);
