import React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import EpisodesLogo from "../../images/EpisodesLogo.png";
import { EpisodeSearch } from "../atoms/EpisodeSearch";
import { EpisodesCards } from "../atoms/EpisodesCards";
import { useDispatch, useSelector } from "react-redux";
import {
  getEpisodeParamsAction,
  setCurrentEpisodePageAction,
  setEpisodeParamsAction,
} from "../../core";
import { getSerialState } from "../../core/selectors/serialSelector";
import { PagesBtn } from "../atoms/PagesBtn";
import { useEffect, useRef, useState } from "react";
import { isEpisodeFilterError } from "../../core/sagas";
import { NotFound } from "../atoms/NotFound";
export const Episodes = memo(() => {
  const dispatch = useDispatch();
  // переключение страниц (по кнопкам)
  const { currentEpisodePage } = useSelector(getSerialState);
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

  // поиск по названию эпизода

  const { episodeParams } = useSelector(getSerialState);

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
    dispatch(getEpisodeParamsAction(episodeParams));
  };

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="episodes-page-wrapper">
            <div className="container episodes-page">
              <div className="episodes-logo">
                <img src={EpisodesLogo} className="episodes-page-logo" />
              </div>
              <Title title={"Episodes"} />

              <EpisodeSearch
                onChangeInputValue={onChangeInputValue}
                onClick={onClickEpisodeParams}
              />
              {isEpisodeFilterError ? (
                <NotFound />
              ) : (
                <div>
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
              )}
            </div>
          </div>
        }
      />
    </div>
  );
});
