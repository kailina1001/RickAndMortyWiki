import React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import EpisodesLogo from "../../images/EpisodesLogo.png";
import { EpisodeSearch } from "../atoms/EpisodeSearch";
import { EpisodesCards } from "../atoms/EpisodesCards";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEpisodePageAction } from "../../core";
import { getSerialState } from "../../core/selectors/serialSelector";
import { PagesBtn } from "../atoms/PagesBtn";

export const Episodes = memo(() => {
  const nextLocationPage = () => {
    dispatch(setCurrentEpisodePageAction(currentEpisodePage + 1));
  };
  const prevLocationPage = () => {
    dispatch(setCurrentEpisodePageAction(currentEpisodePage - 1));
  };

  const { currentEpisodePage } = useSelector(getSerialState);

  const dispatch = useDispatch();

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
              <EpisodesCards currentEpisodePage={currentEpisodePage} />
              <div className="pages-btn">
                <PagesBtn title={"Previous"} onClickPage={prevLocationPage} />
                <PagesBtn title={"Next"} onClickPage={nextLocationPage} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
