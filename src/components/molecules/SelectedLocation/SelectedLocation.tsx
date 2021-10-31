import * as React from "react";
import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { GoBackBtn } from "../../atoms/GoBackBtn";
import { DescriptionText } from "../../atoms/DescriptionText";
import { ResidentsCards } from "../../atoms/ResidentsCards";
import { ILocation } from "../../../types/location";
import { SelectedLocationName } from "../../atoms/SelectedLocationName";
import { DescriptionTitle } from "../../atoms/DescriptionTitle";
import { useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { LocationInfo } from "../../atoms/LocationInfo";

export const SelectedLocation = memo((location: ILocation) => {
  return (
    <div>
      <div className="selected-location-header">
        <GoBackBtn />
        <div>
          <SelectedLocationName name={location.name} />
          <div className="selected-location-type">
            <div>
              <DescriptionTitle title="Type" />
              <DescriptionText text={location.type} />
            </div>
            <div>
              <DescriptionTitle title="Dimension" />
              <DescriptionText text={location.dimension} />
            </div>
          </div>
          <LocationInfo character={location.residents} />
        </div>
      </div>
    </div>
  );
});
