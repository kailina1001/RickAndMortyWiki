import { ILocation, IEpisode } from "../../types/index";
import { IСharacter } from "../../types/character";
import { ActionType, createReducer } from "typesafe-actions";
import {
  setCharacterAction,
  setSelectedCharacterAction,
  setLocationAction,
  setSelectedLocationAction,
  setEpisodesAction,
  setSelectedEpisodesAction,
  setSerialErrorAction,
} from "../actions/serialAction";

export interface ISerialState {
  character: IСharacter[] | null;
  selectedCharacter: IСharacter[] | null;
  location: ILocation[] | null;
  selectedLocation: ILocation[] | null;
  episode: IEpisode[] | null;
  selectedEpisode: IEpisode[] | null;
  serialError: string | null;
}

const defaultState: ISerialState = {
  character: null,
  selectedCharacter: null,
  location: null,
  selectedLocation: null,
  episode: null,
  selectedEpisode: null,
  serialError: null,
};

const actions = {
  setCharacterAction,
  setSelectedCharacterAction,
  setLocationAction,
  setSelectedLocationAction,
  setEpisodesAction,
  setSelectedEpisodesAction,
  setSerialErrorAction,
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
  }));
