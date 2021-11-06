import * as React from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import "./index.css";

interface ILocationsFilter {
  onChangeInputValue: (text: string) => void;
  onChangeHandlerType: (text: string) => void;
  onChangeHandlerDimension: (text: string) => void;
  onClick: () => void;
}

export const LocationsFilter = memo(
  ({
    onChangeInputValue,
    onChangeHandlerType,
    onChangeHandlerDimension,
    onClick,
  }: ILocationsFilter) => {
    const { locations } = useSelector(getSerialState);

    const locationType = locations?.map((a) => a.type);
    const locationTypeResult = Array.from(new Set(locationType));

    const locationDimension = locations?.map((a) => a.dimension);
    const locationDimensionResult = Array.from(new Set(locationDimension));

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
          onClick={() => onClick()}
        >
          Show locations
        </button>
      </div>
    );
  }
);
