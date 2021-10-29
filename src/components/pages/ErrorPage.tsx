import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import mainPageLogo from "../../images/mainPageLogo.png";
import { MainPageSearch } from "../atoms/MainPageSearch";
import { Title } from "../atoms/Title";
import { AboutSeries } from "../atoms/AboutSeries";
import { MainCharactersList } from "../atoms/MainCharactersList";

export const ErrorPage = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="error-page">
            <main>
              <Title title={"Not Found"} />
            </main>
          </div>
        }
      />
    </div>
  );
});
