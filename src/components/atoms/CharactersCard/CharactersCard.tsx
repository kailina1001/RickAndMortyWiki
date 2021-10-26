import * as React from "react";
import { memo } from "react";
import "./index.css";
/* import locationCharacters from "../../../images/locationCharacters.png"; */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { character } from "../../../mock";
import { CharacterName } from "../CharacterName";
import { CharacterImg } from "../CharacterImg";
import { CharacterSpecies } from "../CharacterSpecies";
import { IСharacter } from "../../../types";

/* interface ICharacterCard {
  onClickCharacterCard: (id: number) => void;
} 
{ onClickCharacterCard }: ICharacterCard*/

interface ICharactersCard {
  character: IСharacter[];
}

export const CharactersCard = memo(({ character }: ICharactersCard) => {
  return (
    <div className="characters-cards-wrapper">
      {character?.map((character) => (
        <div key={character.id}>
          <Link className="for-link" to={"/character/" + character.id}>
            <div
              className="character-card"
              /* onClick={() => onClickCharacterCard(character.id)} */
            >
              <CharacterImg image={character.image} />
              <CharacterName name={character.name} />
              <CharacterSpecies species={character.species} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});
