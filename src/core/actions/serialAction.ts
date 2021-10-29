import { createAction } from "typesafe-actions";
import { ACTIONS } from "./constants";
import { IEpisode, ILocation, IСharacter } from "../../types";

export const setCharacterAction = createAction(ACTIONS.SET_CHARACTER_ACTION)<
  IСharacter[] | null
>();

export const setSelectedCharacterAction = createAction(
  ACTIONS.SET_SELECTED_CHARACTER_ACTION
)<IСharacter[] | null>();

export const setLocationAction = createAction(ACTIONS.SET_LOCATION_ACTION)<
  ILocation[] | null
>();

export const setSelectedLocationAction = createAction(
  ACTIONS.SET_SELECTED_LOCATION_ACTION
)<ILocation[] | null>();

export const setEpisodesAction = createAction(ACTIONS.SET_EPISODE_ACTION)<
  IEpisode[] | null
>();

export const setSelectedEpisodesAction = createAction(
  ACTIONS.SET_SELECTED_EPISODE_ACTION
)<IEpisode[] | null>();

export const setSerialErrorAction = createAction(
  ACTIONS.SET_SERIAL_ERROR_ACTION
)<string | null>();
