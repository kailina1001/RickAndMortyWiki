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
      <option selected>Species</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
    <select>
      <option selected>Gender</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
    <select>
      <option selected>Status</option>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>
  </div>
));
