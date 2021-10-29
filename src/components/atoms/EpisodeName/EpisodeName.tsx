import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IEpisodeName {
  name: string;
}

export const EpisodeName = memo(({ name }: IEpisodeName) => (
  <p className="episode-name">{name}</p>
));
