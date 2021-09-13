import * as React from "react";
import { memo } from "react";
import "./index.css";
import mainPageLogo from "../../../images/mainPageLogo.png";
import { MainPageSearch } from "../../atoms/MainPageSearch";
import { Title } from "../../atoms/Title";
import { AboutSeries } from "../../atoms/AboutSeries";
import { MainCharactersList } from "../../atoms/MainCharactersList";

export const MainPage = memo(() => {
  return (
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
          <MainCharactersList />
        </div>
      </div>
    </div>
  );
});
