import * as React from "react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getLocationAction } from "../../../core/actions";
import { getSerialState } from "../../../core/selectors/serialSelector";
import { LocationDimension } from "../LocationDimension";
import { LocationName } from "../LocationName";
import { LocationType } from "../LocationType";
import "./index.css";

interface ILocationsCards {
  currentLocationPage: number;
}

export const LocationsCards = memo(
  ({ currentLocationPage }: ILocationsCards) => {
    const { locations } = useSelector(getSerialState);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getLocationAction(currentLocationPage));
    }, [dispatch, currentLocationPage]);

    return (
      <div className="locations-cards-wrapper">
        {locations?.map((locations) => (
          <div key={locations.id}>
            <Link className="for-link" to={"/location/" + locations.id}>
              <div className="locations-card">
                <LocationName name={locations.name} />
                <LocationType type={locations.type} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
);
