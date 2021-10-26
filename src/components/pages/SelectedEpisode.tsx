import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { GoBackBtn } from "../atoms/GoBackBtn";
import { CastCards } from "../atoms/CastCards";
import { DescriptionTitle } from "../atoms/DescriptionTitle";
import { DescriptionText } from "../atoms/DescriptionText";

export const SelectedEpisode = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="container selected-episode-wrapper">
            <div className="selected-episode-header">
              <GoBackBtn />
              <div>
                <div className="selected-episode-name">Pilot</div>
                <div className="selected-episode-date">
                  <div>
                    <DescriptionTitle title="Episode" />
                    <DescriptionText text="SE01E01" />
                  </div>
                  <div>
                    <DescriptionTitle title="Date" />
                    <DescriptionText text="December 2, 2013" />
                  </div>
                </div>
              </div>
            </div>
            <div className="selected-episode-info">
              <p className="cast-title">Cast</p>
              <CastCards />
            </div>
          </div>
        }
      />
    </div>
  );
});
