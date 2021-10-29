import * as React from "react";
import { memo, useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { CharacterName } from "../CharacterName";
import { CharacterImg } from "../CharacterImg";
import { CharacterSpecies } from "../CharacterSpecies";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { getCharacterAction } from "../../../core/actions";

interface ICharactersCard {
  currentCharacterPage: number;
}

export const CharactersCard = memo(
  ({ currentCharacterPage }: ICharactersCard) => {
    const dispatch = useDispatch();

    const { character } = useSelector(getSerialState);

    useEffect(() => {
      dispatch(getCharacterAction(currentCharacterPage));
    }, [dispatch, currentCharacterPage]);

    return (
      <div className="characters-cards-wrapper">
        {character?.map((character) => (
          <div key={character.id}>
            <Link className="for-link" to={"/character/" + character.id}>
              <div className="character-card">
                <CharacterImg image={character.image} />
                <CharacterName name={character.name} />
                <CharacterSpecies species={character.species} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
);
