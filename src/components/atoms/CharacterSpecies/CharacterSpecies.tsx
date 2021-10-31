import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICharacterSpecies {
  species: string;
}

export const CharacterSpecies = memo(({ species }: ICharacterSpecies) => (
  <p className="character-species">{species}</p>
));
