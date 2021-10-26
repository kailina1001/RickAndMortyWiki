import * as React from "react";
import { memo } from "react";
import "./index.css";

export const LocationsFilter = memo(() => (
  <div className="locations-filter">
    <input
      placeholder="Filter by location..."
      type="search"
      className="locations-search"
    ></input>
    <select>
      <option>Type</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
    <select>
      <option>Dimension</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
  </div>
));
