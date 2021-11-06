import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IEpisodeSearch {
  onChangeInputValue: (text: string) => void;
  onClick: () => void;
}

export const EpisodeSearch = memo(
  ({ onChangeInputValue, onClick }: IEpisodeSearch) => {
    return (
      <div className="episode-search">
        <input
          onChange={(e) => onChangeInputValue(e.target.value)}
          placeholder="Filter by name..."
          type="search"
          className="episode-page-search"
        ></input>
        <button className="episode-filter-btn active" onClick={() => onClick()}>
          Show episodes
        </button>
      </div>
    );
  }
);
