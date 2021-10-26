import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import LocationsLogo from "../../images/LocationsLogo.png";
import { LocationsFilter } from "../atoms/LocationsFilter";
import { LocationsCards } from "../atoms/LocationsCards";

export const Locations = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="locations-page-wrapper">
            <div className="locations-page">
              <div className="locations-logo">
                <img src={LocationsLogo} className="locations-page-logo" />
              </div>
              <Title title={"Locations"} />
              <LocationsFilter />
              <LocationsCards />
              <button>Load more</button>
            </div>
          </div>
        }
      />
    </div>
  );
});
