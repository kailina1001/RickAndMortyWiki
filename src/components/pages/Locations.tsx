import React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import LocationsLogo from "../../images/LocationsLogo.png";
import { LocationsFilter } from "../atoms/LocationsFilter";
import { LocationsCards } from "../atoms/LocationsCards";
import { PagesBtn } from "../atoms/PagesBtn";
import { setCurrentLocationPageAction } from "../../core/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";

export const Locations = memo(() => {
  const nextLocationPage = () => {
    dispatch(setCurrentLocationPageAction(currentLocationPage + 1));
  };
  const prevLocationPage = () => {
    dispatch(setCurrentLocationPageAction(currentLocationPage - 1));
  };

  const { currentLocationPage } = useSelector(getSerialState);

  const dispatch = useDispatch();

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
              <LocationsCards currentLocationPage={currentLocationPage} />
              <div className="pages-btn">
                <PagesBtn title={"Previous"} onClickPage={prevLocationPage} />
                <PagesBtn title={"Next"} onClickPage={nextLocationPage} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
