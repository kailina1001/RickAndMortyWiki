import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import EpisodesLogo from "../../../images/EpisodesLogo.png";

import { LocationsCards } from "../../atoms/LocationsCards";
import { EpisodeSearch } from "../../atoms/EpisodeSearch";

export const EpisodesPage = memo(() => {
  return (
    <div className="episodes-page-wrapper">
      <div className="episodes-page">
        <div className="episodes-logo">
          <img src={EpisodesLogo} className="episodes-page-logo" />
        </div>
        <Title title={"Episodes"} />
        <EpisodeSearch />
      </div>
    </div>
  );
});
