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
} from "../actions/serialAction";
import { IСharacter } from "../../types/character";
import { ILocation } from "../../types/location";
import { IEpisode } from "../../types/episode";
import { IMainСharacter } from "../../types/mainCharacter";

export interface ISerialState {
  character: IСharacter[] | null;
  selectedCharacter: IСharacter[] | null;
  location: ILocation[] | null;
  selectedLocation: ILocation[] | null;
  episode: IEpisode[] | null;
  selectedEpisode: IEpisode[] | null;
  serialError: string | null;
  currentCharacterPage: number;
  currentLocationPage: number;
  currentEpisodePage: number;
  mainCharacter: IMainСharacter[] | null;
}

const defaultState: ISerialState = {
  character: null,
  selectedCharacter: null,
  location: null,
  selectedLocation: null,
  episode: null,
  selectedEpisode: null,
  serialError: null,
  currentCharacterPage: 1,
  currentLocationPage: 1,
  currentEpisodePage: 1,
  mainCharacter: null,
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
};

export const serialReducer = createReducer<
  ISerialState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setCharacterAction, (state, { payload: character }) => ({
    ...state,
    character,
  }))
  .handleAction(
    setSelectedCharacterAction,
    (state, { payload: selectedCharacter }) => ({
      ...state,
      selectedCharacter,
    })
  )
  .handleAction(setLocationAction, (state, { payload: location }) => ({
    ...state,
    location,
  }))
  .handleAction(
    setSelectedLocationAction,
    (state, { payload: selectedLocation }) => ({
      ...state,
      selectedLocation,
    })
  )
  .handleAction(setEpisodesAction, (state, { payload: episode }) => ({
    ...state,
    episode,
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
  );
