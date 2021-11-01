import * as React from "react";
import { memo, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { GoBackBtn } from "../../atoms/GoBackBtn";
import { SelectedCharacterImg } from "../../atoms/SelectedCharacterImg";
import { Title } from "../../atoms/Title";
import { CharacterInfo } from "../../atoms/CharacterInfo";
import { IСharacter } from "../../../types/character";

export const SelectedCharacter = memo((character: IСharacter) => {
  return (
    <div className="selected-character-wrapper">
      <div className="selected-character-header">
        <GoBackBtn />
        <SelectedCharacterImg image={character.image} />
      </div>
      <div>
        <Title title={character.name} />
        <CharacterInfo
          gender={character.gender}
          status={character.status}
          species={character.species}
          origin={character.origin}
          type={character.type}
          location={character.location}
          episode={character.episode}
          character={character}
        />
      </div>
    </div>
  );
});

export { SelectedCharacter as default };
