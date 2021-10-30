import React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import CharactersLogo from "../../images/CharactersLogo.png";
import { CharactersFilter } from "../atoms/CharactersFilter";
import { CharactersCard } from "../atoms/CharactersCard";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";
import { setCurrentCharacterPageAction } from "../../core/actions";
import { PagesBtn } from "../atoms/PagesBtn";

export const Characters = memo(() => {
  const { currentCharacterPage } = useSelector(getSerialState);

  const dispatch = useDispatch();
  const nextCharacterPage = () => {
    dispatch(setCurrentCharacterPageAction(currentCharacterPage + 1));
  };
  const prevCharacterPage = () => {
    dispatch(setCurrentCharacterPageAction(currentCharacterPage - 1));
  };

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="characters-page-wrapper">
            <div className="characters-page">
              <div className="characters-logo">
                <img src={CharactersLogo} className="characters-page-logo" />
              </div>
              <Title title={"Characters"} />
              <CharactersFilter />
              <CharactersCard currentCharacterPage={currentCharacterPage} />
              <div className="pages-btn">
                <PagesBtn title={"Previous"} onClickPage={prevCharacterPage} />
                <PagesBtn title={"Next"} onClickPage={nextCharacterPage} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});
