import { character } from "./../../mock/index";
import { ActionType, createReducer } from "typesafe-actions";
import {
  setCharacterAction,
  setSelectedCharacterAction,
  setLocationAction,
  setSelectedLocationAction,
  setEpisodesAction,
  setSelectedEpisodesAction,
  setSerialErrorAction,
  setCurrentCharacterPageAction,
  setCurrentLocationPageAction,
  setCurrentEpisodePageAction,
  setMainCharacterAction,
  setCharacterSpeciesFilterAction,
  setCharacterGenderFilterAction,
  setCharacterStatusFilterAction,
  setCharacterNameFilterAction,
  setCharacterParamsAction,
} from "../actions/serialAction";
import { IСharacter } from "../../types/character";
import { ILocation } from "../../types/location";
import { IEpisode } from "../../types/episode";
import { IMainСharacter } from "../../types/mainCharacter";

export interface ISerialState {
  characters: IСharacter[] | null;
  selectedCharacter: IСharacter | null;
  locations: ILocation[] | null;
  selectedLocation: ILocation | null;
  episodes: IEpisode[] | null;
  selectedEpisode: IEpisode | null;
  serialError: string | null;
  currentCharacterPage: number;
  currentLocationPage: number;
  currentEpisodePage: number;
  mainCharacter: IMainСharacter[] | null;
  characterParams: any;
}

const defaultState: ISerialState = {
  characters: null,
  selectedCharacter: null,
  locations: null,
  selectedLocation: null,
  episodes: null,
  selectedEpisode: null,
  serialError: null,
  currentCharacterPage: 1,
  currentLocationPage: 1,
  currentEpisodePage: 1,
  mainCharacter: null,
  characterParams: {},
};

const actions = {
  setCharacterAction,
  setSelectedCharacterAction,
  setLocationAction,
  setSelectedLocationAction,
  setEpisodesAction,
  setSelectedEpisodesAction,
  setSerialErrorAction,
  setCurrentCharacterPageAction,
  setCurrentLocationPageAction,
  setCurrentEpisodePageAction,
  setMainCharacterAction,
  setCharacterSpeciesFilterAction,
  setCharacterGenderFilterAction,
  setCharacterStatusFilterAction,
  setCharacterNameFilterAction,
  setCharacterParamsAction,
};

export const serialReducer = createReducer<
  ISerialState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setCharacterAction, (state, { payload: characters }) => ({
    ...state,
    characters,
  }))
  .handleAction(
    setSelectedCharacterAction,
    (state, { payload: selectedCharacter }) => ({
      ...state,
      selectedCharacter,
    })
  )
  .handleAction(setLocationAction, (state, { payload: locations }) => ({
    ...state,
    locations,
  }))
  .handleAction(
    setSelectedLocationAction,
    (state, { payload: selectedLocation }) => ({
      ...state,
      selectedLocation,
    })
  )
  .handleAction(setEpisodesAction, (state, { payload: episodes }) => ({
    ...state,
    episodes,
  }))
  .handleAction(
    setSelectedEpisodesAction,
    (state, { payload: selectedEpisode }) => ({
      ...state,
      selectedEpisode,
    })
  )
  .handleAction(setSerialErrorAction, (state, { payload: serialError }) => ({
    ...state,
    serialError,
  }))
  .handleAction(
    setCurrentCharacterPageAction,
    (state, { payload: currentCharacterPage }) => ({
      ...state,
      currentCharacterPage,
    })
  )
  .handleAction(
    setCurrentLocationPageAction,
    (state, { payload: currentLocationPage }) => ({
      ...state,
      currentLocationPage,
    })
  )
  .handleAction(
    setCurrentEpisodePageAction,
    (state, { payload: currentEpisodePage }) => ({
      ...state,
      currentEpisodePage,
    })
  )
  .handleAction(
    setMainCharacterAction,
    (state, { payload: mainCharacter }) => ({
      ...state,
      mainCharacter,
    })
  )
  .handleAction(
    setCharacterSpeciesFilterAction,
    (state, { payload: characterSpecies }) => ({
      ...state,
      characterSpecies,
    })
  )
  .handleAction(
    setCharacterGenderFilterAction,
    (state, { payload: characterGender }) => ({
      ...state,
      characterGender,
    })
  )
  .handleAction(
    setCharacterStatusFilterAction,
    (state, { payload: characterStatus }) => ({
      ...state,
      characterStatus,
    })
  )
  .handleAction(
    setCharacterNameFilterAction,
    (state, { payload: characterName }) => ({
      ...state,
      characterName,
    })
  )
  .handleAction(
    setCharacterParamsAction,
    (state, { payload: characterParams }) => ({
      ...state,
      characterParams,
    })
  );
