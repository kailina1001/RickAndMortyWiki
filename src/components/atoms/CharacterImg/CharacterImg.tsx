import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ICharacterImg {
  image: string;
}

export const CharacterImg = memo(({ image }: ICharacterImg) => (
  <img src={image} className="character-img" alt="Character is loading..." />
));
