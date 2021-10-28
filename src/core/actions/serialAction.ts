import { createAction } from "typesafe-actions";
import { ACTIONS } from "./constants";
import { IСharacter } from "../../types/character";
import { ILocation } from "../../types/location";
import { IEpisode } from "../../types/episode";
import { IMainСharacter } from "../../types/mainCharacter";

export const setCharacterAction = createAction(ACTIONS.SET_CHARACTER_ACTION)<
  IСharacter[] | null
>();
export const getCharacterAction = createAction(
  ACTIONS.GET_CHARACTER_ACTION
)<any>();

export const setCurrentCharacterPageAction = createAction(
  ACTIONS.SET_CURRENT_CHARACTER_PAGE_ACTION
)<number>();

export const setSelectedCharacterAction = createAction(
  ACTIONS.SET_SELECTED_CHARACTER_ACTION
)<any>();
export const getSelectedCharacterAction = createAction(
  ACTIONS.GET_SELECTED_CHARACTER_ACTION
)();

export const setLocationAction = createAction(ACTIONS.SET_LOCATION_ACTION)<
  ILocation[] | null
>();
export const getLocationAction = createAction(
  ACTIONS.GET_LOCATION_ACTION
)<any>();
export const setCurrentLocationPageAction = createAction(
  ACTIONS.SET_CURRENT_LOCATION_PAGE_ACTION
)<number>();

export const setSelectedLocationAction = createAction(
  ACTIONS.SET_SELECTED_LOCATION_ACTION
)<ILocation[] | null>();
export const getSelectedLocationAction = createAction(
  ACTIONS.GET_SELECTED_LOCATION_ACTION
)<ILocation[] | null>();

export const setEpisodesAction = createAction(ACTIONS.SET_EPISODE_ACTION)<
  IEpisode[] | null
>();
export const getEpisodesAction = createAction(
  ACTIONS.GET_EPISODE_ACTION
)<any>();
export const setCurrentEpisodePageAction = createAction(
  ACTIONS.SET_CURRENT_EPISODE_PAGE_ACTION
)<number>();

export const setSelectedEpisodesAction = createAction(
  ACTIONS.SET_SELECTED_EPISODE_ACTION
)<IEpisode[] | null>();
export const getSelectedEpisodesAction = createAction(
  ACTIONS.GET_SELECTED_EPISODE_ACTION
)<IEpisode[] | null>();

export const setSerialErrorAction = createAction(
  ACTIONS.SET_SERIAL_ERROR_ACTION
)<string | null>();
/* export const getSerialErrorAction = createAction(
  ACTIONS.GET_SERIAL_ERROR_ACTION
)<string | null>(); */

export const setMainCharacterAction = createAction(
  ACTIONS.SET_MAIN_CHARACTER_ACTION
)<IMainСharacter[] | null>();

export const getMainCharacterAction = createAction(
  ACTIONS.GET_MAIN_CHARACTER_ACTION
)<any>();
