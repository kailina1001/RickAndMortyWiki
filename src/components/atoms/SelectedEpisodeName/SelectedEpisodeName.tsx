import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISelectedEpisodeName {
  name: string;
}

export const SelectedEpisodeName = memo(({ name }: ISelectedEpisodeName) => (
  <h4 className="selected-episode-name">{name}</h4>
));
