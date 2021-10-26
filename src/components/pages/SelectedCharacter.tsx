import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import characterPic from "../../images/characterPic.png";
import { CharacterInfo } from "../atoms/CharacterInfo";
import { CharacterEpisodes } from "../atoms/CharacterEpisodes";
import { GoBackBtn } from "../atoms/GoBackBtn";

interface ISelectedCharacter {
  image: string;
  name: string;
}

export const SelectedCharacter = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="selected-character-wrapper">
            <div className="selected-character-header">
              <GoBackBtn />
              <img src={characterPic} className="character-pic" />
            </div>
            <Title title={"Rick Sanchez"} />
            <div className="selected-character-info">
              <CharacterInfo />
              <CharacterEpisodes />
            </div>
          </div>
        }
      />
    </div>
  );
});
