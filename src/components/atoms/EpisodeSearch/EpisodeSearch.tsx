import * as React from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeParamsAction, setEpisodeParamsAction } from "../../../core";
import { getSerialState } from "../../../core/selectors/serialSelector";
import "./index.css";

export const EpisodeSearch = memo(() => {
  const { episodeParams } = useSelector(getSerialState);

  const dispatch = useDispatch();

  const onChangeInputValue = (e: string) => {
    dispatch(
      setEpisodeParamsAction({
        ...episodeParams,
        name: e,
      })
    );
  };

  const onClickEpisodeParams = () => {
    dispatch(getEpisodeParamsAction(episodeParams));
  };

  return (
    <div className="episode-search">
      <input
        onChange={(e) => onChangeInputValue(e.target.value)}
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        type="search"
        className="episode-page-search"
      ></input>
      <button
        className="episode-filter-btn active"
        onClick={onClickEpisodeParams}
      >
        {" "}
        Show episodes{" "}
      </button>
    </div>
  );
});
