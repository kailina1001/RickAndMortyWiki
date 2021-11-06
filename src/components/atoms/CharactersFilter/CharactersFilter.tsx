import * as React from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getSerialState } from "../../../core/selectors/serialSelector";
import "./index.css";

interface ICharactersFilter {
  onChangeInputValue: (text: string) => void;
  onChangeHandlerSpecies: (text: string) => void;
  onChangeHandlerGender: (text: string) => void;
  onChangeHandlerStatus: (text: string) => void;
  onClick: () => void;
}

export const CharactersFilter = memo(
  ({
    onClick,
    onChangeInputValue,
    onChangeHandlerSpecies,
    onChangeHandlerGender,
    onChangeHandlerStatus,
  }: ICharactersFilter) => {
    const { characters } = useSelector(getSerialState);

    const characterSpecies = characters?.map((a) => a.species);
    const characterSpeciesResult = Array.from(new Set(characterSpecies));

    const characterGender = characters?.map((a) => a.gender);
    const characterGenderResult = Array.from(new Set(characterGender));

    const characterStatus = characters?.map((a) => a.status);
    const characterStatusResult = Array.from(new Set(characterStatus));

    return (
      <div className="characters-filter">
        <input
          onChange={(e) => onChangeInputValue(e.target.value)}
          placeholder="Filter by name..."
          type="search"
          className="characters-search"
        ></input>
        <select
          className="character-filter-select"
          onChange={(e) => onChangeHandlerSpecies(e.target.value)}
        >
          <option value="species">Species</option>
          {characterSpeciesResult.map((result) => (
            <option value={result.toLowerCase()}>{result.toUpperCase()}</option>
          ))}
        </select>
        <select
          className="character-filter-select"
          onChange={(e) => onChangeHandlerGender(e.target.value)}
        >
          <option value="gender">Gender</option>
          {characterGenderResult.map((result) => (
            <option value={result.toLowerCase()}>{result.toUpperCase()}</option>
          ))}
        </select>
        <select
          className="character-filter-select"
          onChange={(e) => onChangeHandlerStatus(e.target.value)}
        >
          <option value="status">Status</option>
          {characterStatusResult.map((result) => (
            <option value={result.toLowerCase()}>{result.toUpperCase()}</option>
          ))}
        </select>
        <button
          className="character-filter-btn active"
          onClick={() => onClick()}
        >
          Show character
        </button>
      </div>
    );
  }
);
