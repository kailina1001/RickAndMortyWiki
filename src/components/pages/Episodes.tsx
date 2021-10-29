import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import EpisodesLogo from "../../images/EpisodesLogo.png";
import { EpisodeSearch } from "../atoms/EpisodeSearch";
import { EpisodesCards } from "../atoms/EpisodesCards";

export const Episodes = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="episodes-page-wrapper">
            <div className="episodes-page">
              <div className="episodes-logo">
                <img src={EpisodesLogo} className="episodes-page-logo" />
              </div>
              <Title title={"Episodes"} />
              <EpisodeSearch />
              <EpisodesCards />
              <button>Load more</button>
            </div>
          </div>
        }
      />
    </div>
  );
});
