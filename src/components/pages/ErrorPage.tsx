import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import mainPageLogo from "../../images/mainPageLogo.png";
import { MainPageSearch } from "../atoms/MainPageSearch";
import { Title } from "../atoms/Title";
import { AboutSeries } from "../atoms/AboutSeries";
import { MainCharactersList } from "../atoms/MainCharactersList";
import errorImg from "../../images/error-page.gif";
import { ErrorTitle } from "../atoms/ErrorTitle";

export const ErrorPage = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="error-page">
            <ErrorTitle title={"Not Found"} />
            <img src={errorImg} className="error-page-pic" />
          </div>
        }
      />
    </div>
  );
});
