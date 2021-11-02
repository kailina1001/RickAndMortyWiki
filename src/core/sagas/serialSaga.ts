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
  setMainCharacterAction,
} from "../actions/serialAction";
import { CharacterService } from "../../services/CharacterService";
import { LocationService } from "../../services/LocationService";
import { EpisodeService } from "../../services/EpisodeService";

function* getCharacterSaga({ payload: currentCharacterPage }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter(currentCharacterPage)
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
    //!!!!!!!!!!!!!!!!!нет result!
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected character not found"));
  }
}

function* getLocationSaga({ payload: currentLocationPage }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      LocationService.getLocation(currentLocationPage)
    );
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
    yield put(setSelectedLocationAction(data.data));
    //!!!!!!!!!!!!!!!!!нет result!
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected location not found"));
  }
}

function* getEpisodeSaga({ payload: currentEpisodePage }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      EpisodeService.getEpisode(currentEpisodePage)
    );
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
    yield put(setSelectedEpisodesAction(data.data));
    //!! удалила result
  } catch (e: any) {
    yield put(setSerialErrorAction("Selected episode not found"));
  }
}

function* getMainCharacterAction({ payload: mainCharacter }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter(mainCharacter)
    );
    yield put(setMainCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
}

/* function* getCharacterSpeciesFilterAction({
  payload: characterSpecies,
}: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter(characterSpecies)
    );
    yield put(setMainCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
}

function* getCharacterGenderFilterAction({
  payload: characterGender,
}: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter(characterGender)
    );

    yield put(setMainCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
}

function* getCharacterStatusFilterAction({
  payload: characterStatus,
}: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacter(characterStatus)
    );
    yield put(setMainCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
} */

function* getFiltredCharacterSaga({ payload: characterParams }: Action<any>) {
  try {
    const data: { data: any } = yield call(() =>
      CharacterService.getCharacterFilterAction(characterParams)
    );
    yield put(setCharacterAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Character not found"));
  }
}

function* getFiltredLocationSaga({ payload: locationParams }: Action<any>) {
  try {
    const data: { data: any } = yield call(() =>
      LocationService.getLocationFilterAction(locationParams)
    );
    yield put(setLocationAction(data.data.results));
  } catch (e: any) {
    yield put(setSerialErrorAction("Location not found"));
  }
}

export function* serialSaga() {
  yield takeEvery(ACTIONS.GET_CHARACTER_ACTION, getCharacterSaga);
  yield takeEvery(
    ACTIONS.GET_SELECTED_CHARACTER_ACTION,
    getSelectedCharacterSaga
  );
  yield takeEvery(ACTIONS.GET_LOCATION_ACTION, getLocationSaga);
  yield takeEvery(
    ACTIONS.GET_SELECTED_LOCATION_ACTION,
    getSelectedLocationSaga
  );
  yield takeEvery(ACTIONS.GET_EPISODE_ACTION, getEpisodeSaga);
  yield takeEvery(ACTIONS.GET_SELECTED_EPISODE_ACTION, getSelectedEpisodeSaga);
  yield takeEvery(ACTIONS.GET_MAIN_CHARACTER_ACTION, getMainCharacterAction);

  yield takeEvery(ACTIONS.GET_CHARACTER_PARAMS_ACTION, getFiltredCharacterSaga);
  yield takeEvery(ACTIONS.GET_LOCATION_PARAMS_ACTION, getFiltredLocationSaga);
}
