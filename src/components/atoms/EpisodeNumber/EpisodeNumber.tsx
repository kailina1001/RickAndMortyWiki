import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IEpisodeNumber {
  number: string;
}

export const EpisodeNumber = memo(({ number }: IEpisodeNumber) => (
  <p className="episode-number">{number}</p>
));
