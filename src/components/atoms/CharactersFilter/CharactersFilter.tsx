import * as React from "react";
import { memo } from "react";
import "./index.css";

export const CharactersFilter = memo(() => (
  <div className="characters-filter">
    <input
      placeholder="Filter by name..."
      type="search"
      className="characters-search"
    ></input>
    <select>
      <option disabled>Species</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
    <select>
      <option disabled>Gender</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
    <select>
      <option disabled>Status</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
  </div>
));
