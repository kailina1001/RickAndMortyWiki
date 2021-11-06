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
)<IСharacter | null>();
export const getSelectedCharacterAction = createAction(
  ACTIONS.GET_SELECTED_CHARACTER_ACTION
)<IСharacter | null>();

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
)<ILocation | null>();
export const getSelectedLocationAction = createAction(
  ACTIONS.GET_SELECTED_LOCATION_ACTION
)<ILocation | null>();

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
)<IEpisode | null>();
export const getSelectedEpisodesAction = createAction(
  ACTIONS.GET_SELECTED_EPISODE_ACTION
)<IEpisode | null>();

export const setSerialErrorAction = createAction(
  ACTIONS.SET_SERIAL_ERROR_ACTION
)<any>();
export const getSerialErrorAction = createAction(
  ACTIONS.GET_SERIAL_ERROR_ACTION
)<any>();

export const setMainCharacterAction = createAction(
  ACTIONS.SET_MAIN_CHARACTER_ACTION
)<IMainСharacter[] | null>();

export const getMainCharacterAction = createAction(
  ACTIONS.GET_MAIN_CHARACTER_ACTION
)<any>();

export const setCharacterSpeciesFilterAction = createAction(
  ACTIONS.SET_CHARACTER_SPECIES_FILTER_ACTION
)<string>();
export const setCharacterGenderFilterAction = createAction(
  ACTIONS.SET_CHARACTER_GENDER_FILTER_ACTION
)<string>();
export const setCharacterStatusFilterAction = createAction(
  ACTIONS.SET_CHARACTER_STATUS_FILTER_ACTION
)<string>();
export const setCharacterNameFilterAction = createAction(
  ACTIONS.SET_CHARACTER_NAME_FILTER_ACTION
)<string>();

export const getCharacterSpeciesFilterAction = createAction(
  ACTIONS.GET_CHARACTER_SPECIES_FILTER_ACTION
)<any>();
export const getCharacterGenderFilterAction = createAction(
  ACTIONS.GET_CHARACTER_GENDER_FILTER_ACTION
)<any>();
export const getCharacterStatusFilterAction = createAction(
  ACTIONS.GET_CHARACTER_STATUS_FILTER_ACTION
)<any>();
export const getCharacterNameFilterAction = createAction(
  ACTIONS.GET_CHARACTER_STATUS_FILTER_ACTION
)<any>();

export const setCharacterParamsAction = createAction(
  ACTIONS.SET_CHARACTER_PARAMS_ACTION
)<any>();

export const getCharacterParamsAction = createAction(
  ACTIONS.GET_CHARACTER_PARAMS_ACTION
)<any>();

export const setLocationParamsAction = createAction(
  ACTIONS.SET_LOCATION_PARAMS_ACTION
)<any>();

export const getLocationParamsAction = createAction(
  ACTIONS.GET_LOCATION_PARAMS_ACTION
)<any>();

export const setEpisodeParamsAction = createAction(
  ACTIONS.SET_EPISODE_PARAMS_ACTION
)<any>();

export const getEpisodeParamsAction = createAction(
  ACTIONS.GET_EPISODE_PARAMS_ACTION
)<any>();
