import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { ResidentsCards } from "../atoms/ResidentsCards";
import { Title } from "../atoms/Title";
import locationCharacters from "../../images/locationCharacters.png";
import { CharacterInfo } from "../atoms/CharacterInfo";
import { CharacterEpisodes } from "../atoms/CharacterEpisodes";
import { GoBackBtn } from "../atoms/GoBackBtn";
import { DescriptionTitle } from "../atoms/DescriptionTitle";
import { DescriptionText } from "../atoms/DescriptionText";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSerialState } from "../../core/selectors/serialSelector";

export const SelectedLocation = memo(() => {
  /*  const { selectedLocation } = useSelector(getSerialState); */

  const history = useHistory();
  const goBackBtn = () => {
    history.push("/locations");
  };
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="container selected-location-wrapper">
            <div className="selected-location-header">
              <GoBackBtn onClick={goBackBtn} />
              <div>
                <div className="selected-location-name">
                  Earth (Replacement Dimension)
                </div>
                <div className="selected-location-type">
                  <div>
                    <DescriptionTitle title="Type" />
                    <DescriptionText text="Planet" />
                  </div>
                  <div>
                    <DescriptionTitle title="Dimension" />
                    <DescriptionText text="Replacement Dimension" />
                  </div>
                </div>
              </div>
            </div>
            <div className="selected-location-info">
              <p className="residents-title">Residents</p>
              <ResidentsCards />
            </div>
          </div>
        }
      />
    </div>
  );
});
