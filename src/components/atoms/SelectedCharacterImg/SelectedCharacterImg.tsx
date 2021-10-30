import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISelectedCharacterImg {
  image: string;
}

export const SelectedCharacterImg = memo(({ image }: ISelectedCharacterImg) => (
  <img src={image} className="selected-character-img" />
));
