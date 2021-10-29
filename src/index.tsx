import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CharacterService } from "./services/CharacterService";
import { EpisodeService } from "./services/EpisodeService";
import { LocationService } from "./services/LocationService";

CharacterService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});
CharacterService.prefix = "character";

EpisodeService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});

EpisodeService.prefix = "episode";

LocationService.setCredentials({
  URL: "https://rickandmortyapi.com/api/",
});
LocationService.prefix = "location";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

/* ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
); */
