import * as React from "react";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
    const dispatch = useDispatch();

    const { location } = useSelector(getSerialState);

    console.log(location);

    useEffect(() => {
      dispatch(getLocationAction(currentLocationPage));
    }, [dispatch, currentLocationPage]);

    return (
      <div className="locations-cards-wrapper">
        {location?.map((location) => (
          <div key={location.id}>
            <Link className="for-link" to={"/location/" + location.id}>
              <div className="locations-card">
                <LocationName name={location.name} />
                <LocationDimension dimension={location.dimension} />
                <LocationType type={location.type} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
);
