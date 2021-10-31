import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import mainPageLogo from "../../images/mainPageLogo.png";
import { MainPageSearch } from "../atoms/MainPageSearch";
import { Title } from "../atoms/Title";
import { AboutSeries } from "../atoms/AboutSeries";
import { MainCharactersList } from "../atoms/MainCharactersList";
import { useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";

export const Home = memo(() => {
  const { mainCharacter } = useSelector(getSerialState);

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="main-page-wrapper">
            <div className="main-page">
              <div className="main-page-logo-search">
                <img src={mainPageLogo} className="main-page-logo" />
                <MainPageSearch />
              </div>
              <div className="info">
                <Title title={"WELCOME TO THE RICK AND MORTY WIKI!"} />
                <AboutSeries />
              </div>
              <div className="main-characters">
                <Title title={"Main Characters"} />
                <MainCharactersList mainCharacter={mainCharacter} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
