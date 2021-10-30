import * as React from "react";
import { memo } from "react";
import "./index.css";

export const SelectedCharacterInfo = memo(() => {
  return (
    <input
      placeholder="Search..."
      type="search"
      className="main-page-search"
    ></input>
  );
});
