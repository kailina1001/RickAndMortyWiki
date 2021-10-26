import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/molecules/Navigation";
import { MainPage } from "./components/molecules/MainPage";
import { CharactersPage } from "./components/molecules/CharactersPage";
import { SelectedCharacter } from "./components/molecules/SelectedCharacter";
import { LocationsPage } from "./components/molecules/LocationsPage";

import { EpisodesPage } from "./components/molecules/EpisodesPage";
import { SelectedEpisode } from "./components/molecules/SelectedEpisode";
import { SelectedLocation } from "./components/molecules/SelectedLocation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <MainPage />
        <CharactersPage />
        <SelectedCharacter />
        <LocationsPage />
        <SelectedLocation />
        <EpisodesPage />
        <SelectedEpisode />
      </main>
    </div>
  );
}

export default App;
