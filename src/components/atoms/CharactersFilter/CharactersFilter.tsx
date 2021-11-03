import * as React from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacterParamsAction,
  setCharacterParamsAction,
} from "../../../core";
import { getSerialState } from "../../../core/selectors/serialSelector";
import "./index.css";

export const CharactersFilter = memo(() => {
  const { characters, characterParams } = useSelector(getSerialState);

  const characterSpecies = characters?.map((a) => a.species);
  const characterSpeciesResult = Array.from(new Set(characterSpecies));

  const characterGender = characters?.map((a) => a.gender);
  const characterGenderResult = Array.from(new Set(characterGender));

  const characterStatus = characters?.map((a) => a.status);
  const characterStatusResult = Array.from(new Set(characterStatus));

  const dispatch = useDispatch();

  const onChangeInputValue = (e: string) => {
    dispatch(
      setCharacterParamsAction({
        ...characterParams,
        name: e,
      })
    );
  };

  const onChangeHandlerSpecies = (text: string) => {
    dispatch(
      setCharacterParamsAction({
        ...characterParams,
        species: text,
      })
    );
  };

  const onChangeHandlerStatus = (text: string) => {
    dispatch(
      setCharacterParamsAction({
        ...characterParams,
        status: text,
      })
    );
  };

  const onChangeHandlerGender = (text: string) => {
    dispatch(
      setCharacterParamsAction({
        ...characterParams,
        gender: text,
      })
    );
  };

  const onClickCharacterParams = () => {
    dispatch(getCharacterParamsAction(characterParams));
  };

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
        onClick={onClickCharacterParams}
      >
        Show character
      </button>
    </div>
  );
});
