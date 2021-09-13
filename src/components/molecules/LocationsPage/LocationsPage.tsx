import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import LocationsLogo from "../../../images/LocationsLogo.png";
import { LocationsFilter } from "../../atoms/LocationsFilter";
import { LocationsCards } from "../../atoms/LocationsCards";

export const LocationsPage = memo(() => {
  return (
    <div className="locations-page-wrapper">
      <div className="locations-page">
        <div className="locations-logo">
          <img src={LocationsLogo} className="locations-page-logo" />
        </div>
        <Title title={"Locations"} />
        <LocationsFilter />
        <LocationsCards />
      </div>
    </div>
  );
});
