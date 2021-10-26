import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { PublicRoute } from "./router/PublicRoute";
import { Home } from "./components/pages/Main";
import { Characters } from "./components/pages/Characters";
import { Locations } from "./components/pages/Locations";
import { Episodes } from "./components/pages/Episodes";
import { SelectedCharacter } from "./components/pages/SelectedCharacter";
import { SelectedLocation } from "./components/pages/SelectedLocation";
import { SelectedEpisode } from "./components/pages/SelectedEpisode";

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={Characters} path="/characters" exact />
        <PublicRoute component={Locations} path="/locations" exact />
        <PublicRoute component={Episodes} path="/episodes" exact />
        <PublicRoute
          component={SelectedCharacter}
          path="/character/:id"
          exact
        />
        <PublicRoute component={SelectedLocation} path="/location/" exact />
        <PublicRoute component={SelectedEpisode} path="/episode/" exact />
      </Switch>
    </div>
  );
}

export default App;

/*   
!!!!!!!!!!!!!!!!!!!!!!!!!!!
<PublicRoute component={SelectedCharacter} path="/character/:uid" exact />
<PublicRoute component={SelectedLocation} path="/location/:uid" exact />
        <PublicRoute component={SelectedEpisode} path="/episode/:uid" exact /> */
