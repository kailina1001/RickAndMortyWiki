import * as React from "react";
import { memo } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { GoBackBtn } from "../../atoms/GoBackBtn";
import { SelectedCharacterImg } from "../../atoms/SelectedCharacterImg";
import { Title } from "../../atoms/Title";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { CharacterEpisodes } from "../../atoms/CharacterEpisodes";
import { IСharacter } from "../../../types/character";

export const SelectedCharacter = memo((character: IСharacter) => {
  const history = useHistory();
  const goBackBtn = () => {
    history.push("/characters");
  };

  console.log(character);

  return (
    <div className="selected-character-wrapper">
      <div className="selected-character-header">
        <GoBackBtn onClick={goBackBtn} />
        <SelectedCharacterImg image={character.image} />
      </div>
      <div>
        <Title title={character.name} />
        <div className="selected-character-info">
          <CharacterInfo
            gender={character.gender}
            status={character.status}
            species={character.species}
            origin={character.origin}
            type={character.type}
            location={character.location}
          />
          <CharacterEpisodes
            episode={character.episode.episode}
            name={character.episode.name}
            air_date={character.episode.air_date}
          />
        </div>
      </div>
    </div>
  );
});
