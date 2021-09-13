import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/molecules/Navigation";
import { MainPage } from "./components/molecules/MainPage";
import { CharactersPage } from "./components/molecules/CharactersPage";
import { SelectedCharacter } from "./components/molecules/SelectedCharacter";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <MainPage />
        <CharactersPage />
        <SelectedCharacter />
      </main>
    </div>
  );
}

export default App;
