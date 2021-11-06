import React from "react";
import "./App.css";
import { PublicRoute } from "./router/PublicRoute";
import { Home } from "./components/pages/Main";
import { Characters } from "./components/pages/Characters";
import { Locations } from "./components/pages/Locations";
import { Episodes } from "./components/pages/Episodes";
import { SelectedCharacterPage } from "./components/pages/SelectedCharacterPage";
import { SelectedLocationPage } from "./components/pages/SelectedLocationPage";
import { SelectedEpisodePage } from "./components/pages/SelectedEpisodePage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={Characters} path="/characters" exact />
        <PublicRoute component={Locations} path="/locations" exact />
        <PublicRoute component={Episodes} path="/episodes" exact />
        <PublicRoute
          component={SelectedCharacterPage}
          path="/character/:id"
          exact
        />
        <PublicRoute
          component={SelectedLocationPage}
          path="/location/:id"
          exact
        />
        <PublicRoute
          component={SelectedEpisodePage}
          path="/episode/:id"
          exact
        />
        <PublicRoute path="/notfound" component={ErrorPage} exact />
      </Switch>
    </div>
  );
}

export default App;
