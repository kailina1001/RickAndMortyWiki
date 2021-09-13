import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import CharactersLogo from "../../../images/CharactersLogo.png";
import { CharactersFilter } from "../../atoms/CharactersFilter";
import { CharactersCard } from "../../atoms/CharactersCard";

export const CharactersPage = memo(() => {
  return (
    <div className="characters-page-wrapper">
      <div className="characters-page">
        <div className="characters-logo">
          <img src={CharactersLogo} className="characters-page-logo" />
        </div>
        <Title title={"Characters"} />
        <CharactersFilter />
        <CharactersCard />
      </div>
    </div>
  );
});
