import * as React from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocationParamsAction,
  setLocationParamsAction,
} from "../../../core";
import { getSerialState } from "../../../core/selectors/serialSelector";
import "./index.css";

export const LocationsFilter = memo(() => {
  const { locations, locationParams } = useSelector(getSerialState);

  const locationType = locations?.map((a) => a.type);
  const locationTypeResult = Array.from(new Set(locationType));

  const locationDimension = locations?.map((a) => a.dimension);
  const locationDimensionResult = Array.from(new Set(locationDimension));

  const dispatch = useDispatch();

  const onChangeInputValue = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        name: text,
      })
    );
  };

  const onChangeHandlerType = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        type: text,
      })
    );
  };

  const onChangeHandlerDimension = (text: string) => {
    dispatch(
      setLocationParamsAction({
        ...locationParams,
        dimension: text,
      })
    );
  };

  const onClickLocationParams = () => {
    dispatch(getLocationParamsAction(locationParams));
  };

  return (
    <div className="locations-filter">
      <input
        onChange={(text) => onChangeInputValue(text.target.value)}
        placeholder="Filter by location..."
        type="search"
        className="locations-search"
      ></input>
      <select
        className="location-filter-select"
        onChange={(e) => onChangeHandlerType(e.target.value)}
      >
        <option value="type">Type</option>
        {locationTypeResult.map((result) => (
          <option value={result.toLowerCase()}>{result.toUpperCase()}</option>
        ))}
      </select>
      <select
        className="location-filter-select"
        onChange={(e) => onChangeHandlerDimension(e.target.value)}
      >
        <option value="dimension">Dimension</option>
        {locationDimensionResult.map((result) => (
          <option value={result.toLowerCase()}>{result.toUpperCase()}</option>
        ))}
      </select>
      <button
        className="location-filter-btn active"
        onClick={onClickLocationParams}
      >
        Show locations
      </button>
    </div>
  );
});
