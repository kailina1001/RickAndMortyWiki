import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  setCharacterAction,
  setSelectedCharacterAction,
  setLocationAction,
  setSelectedLocationAction,
  setEpisodesAction,
  setSelectedEpisodesAction,
  setSerialErrorAction,
} from "../actions/serialAction";
import { CharacterService } from "../../services/CharacterService";
import { LocationService } from "../../services/LocationService";
import { EpisodeService } from "../../services/EpisodeService";

function* getCharacterSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter()
    );
    yield put(setCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
}

function* getSelectedCharacterSaga({ payload: id }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getSelectedCharacter(id)
    );
    yield put(setSelectedCharacterAction(data.data));
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected character not found"));
  }
}

function* getLocationSaga() {
  try {
    const data: { data: any } = yield call(() => LocationService.getLocation());
    yield put(setLocationAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Location not found"));
  }
}

function* getSelectedLocationSaga({ payload: id }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      LocationService.getSelectedLocation(id)
    );
    yield put(setSelectedLocationAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected location not found"));
  }
}

function* getEpisodeSaga() {
  try {
    const data: { data: any } = yield call(() => EpisodeService.getEpisode());
    yield put(setEpisodesAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Episode not found"));
  }
}

function* getSelectedEpisodeSaga({ payload: id }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      EpisodeService.getSelectedEpisode(id)
    );
    yield put(setSelectedEpisodesAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected episode not found"));
  }
}

export function* serialSaga() {
  yield takeEvery(ACTIONS.SET_CHARACTER_ACTION, getCharacterSaga);
  yield takeEvery(
    ACTIONS.SET_SELECTED_CHARACTER_ACTION,
    getSelectedCharacterSaga
  );
  yield takeEvery(ACTIONS.SET_LOCATION_ACTION, getLocationSaga);
  yield takeEvery(
    ACTIONS.SET_SELECTED_LOCATION_ACTION,
    getSelectedLocationSaga
  );
  yield takeEvery(ACTIONS.SET_EPISODE_ACTION, getEpisodeSaga);
  yield takeEvery(ACTIONS.SET_SELECTED_EPISODE_ACTION, getSelectedEpisodeSaga);
}
