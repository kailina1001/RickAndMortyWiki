import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IEpisodeAirData {
  air_date: string;
}

export const EpisodeAirData = memo(({ air_date }: IEpisodeAirData) => (
  <p className="episode-air-data">{air_date}</p>
));
