import * as React from "react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EpisodeAirData } from "../EpisodeAirData";
import { EpisodeName } from "../EpisodeName";
import { EpisodeNumber } from "../EpisodeNumber";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { getEpisodesAction } from "../../../core/actions";

interface IEpisodeCards {
  currentEpisodePage: number;
}

export const EpisodesCards = memo(({ currentEpisodePage }: IEpisodeCards) => {
  const dispatch = useDispatch();

  const { episode } = useSelector(getSerialState);

  console.log(episode);

  useEffect(() => {
    dispatch(getEpisodesAction(currentEpisodePage));
  }, [dispatch, currentEpisodePage]);

  return (
    <div className="episodes-cards-wrapper">
      {episode?.map((episode) => (
        <div key={episode.id}>
          <Link className="for-link" to={"/episode/" + episode.id}>
            <div className="episodes-card">
              <EpisodeName name={episode.name} />
              <EpisodeAirData air_date={episode.air_date} />
              <EpisodeNumber number={episode.episode} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});
