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
  const { currentEpisodePage } = useSelector(getSerialState);

  const dispatch = useDispatch();
  const nextEpisodePage = () => {
    dispatch(setCurrentEpisodePageAction(currentEpisodePage + 1));
  };
  const prevEpisodePage = () => {
    dispatch(setCurrentEpisodePageAction(currentEpisodePage - 1));
  };

  function checkPage(currPage: any, direction: string) {
    const prevbtn = document.querySelector(".previous-btn");
    const nextbtn = document.querySelector(".next-btn");
    if (currPage == 2) {
      if (direction == "prev") {
        (prevbtn as HTMLElement).style.display = "none";
      } else {
        (nextbtn as HTMLElement).style.display = "none";
      }
    } else {
      (prevbtn as HTMLElement).style.display = "block";
      (nextbtn as HTMLElement).style.display = "block";
    }
  }

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
                <PagesBtn
                  title={"Previous"}
                  onClickPage={() => {
                    checkPage(currentEpisodePage, "prev");
                    prevEpisodePage();
                  }}
                  btnClassName={"previous-btn"}
                />
                <PagesBtn
                  title={"Next"}
                  onClickPage={() => {
                    checkPage(currentEpisodePage, "next");
                    nextEpisodePage();
                  }}
                  btnClassName={"next-btn"}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
