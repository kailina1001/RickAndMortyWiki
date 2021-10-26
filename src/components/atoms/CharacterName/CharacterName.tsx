import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICharacterName {
  name: string;
}

export const CharacterName = memo(({ name }: ICharacterName) => (
  <h3 className="character-name">{name}</h3>
));
