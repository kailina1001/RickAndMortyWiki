import * as React from "react";
import { memo } from "react";
import "./index.css";

export const EpisodeSearch = memo(() => {
  return (
    <input
      placeholder="Filter by name or episode (ex. S01 or S01E02)"
      type="search"
      className="main-page-search"
    ></input>
  );
});
