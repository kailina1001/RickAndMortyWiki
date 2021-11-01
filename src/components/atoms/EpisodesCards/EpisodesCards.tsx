import * as React from "react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EpisodeAirData } from "../EpisodeAirData";
import { EpisodeName } from "../EpisodeName";
import { EpisodeNumber } from "../EpisodeNumber";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { getEpisodesAction } from "../../../core/actions";
import "./index.css";

interface IEpisodeCards {
  currentEpisodePage: number;
}

export const EpisodesCards = memo(({ currentEpisodePage }: IEpisodeCards) => {
  const { episodes } = useSelector(getSerialState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEpisodesAction(currentEpisodePage));
  }, [dispatch, currentEpisodePage]);

  return (
    <div className="episodes-cards-wrapper">
      {episodes?.map((episodes) => (
        <div key={episodes.id}>
          <Link className="for-link" to={"/episode/" + episodes.id}>
            <div className="episodes-card">
              <EpisodeName name={episodes.name} />
              <EpisodeAirData air_date={episodes.air_date} />
              <EpisodeNumber number={episodes.episode} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});
