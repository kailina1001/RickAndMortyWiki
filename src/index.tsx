import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CharacterService } from "./services/CharacterService";
import { EpisodeService } from "./services/EpisodeService";
import { LocationService } from "./services/LocationService";
import { Provider } from "react-redux";
import { store } from "./core/store";

CharacterService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});
CharacterService.prefix = "character";

LocationService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});
LocationService.prefix = "location";

EpisodeService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});

EpisodeService.prefix = "episode";

ReactDOM.render(
  <BrowserRouter basename="/RickAndMortyWiki">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
