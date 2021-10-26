import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title";
import CharactersLogo from "../../images/CharactersLogo.png";
import { CharactersFilter } from "../atoms/CharactersFilter";
import { CharactersCard } from "../atoms/CharactersCard";
import { url } from "inspector";
import { getByTestId } from "@testing-library/react";
import { LoadMoreBtn } from "../atoms/LoadMoreBtn";
import { character } from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";
import { setCharacterAction } from "../../core/actions";
import { useHistory } from "react-router";

export const Characters = memo(() => {
  /*  const dispatch = useDispatch();

  const { character } = useSelector(getSerialState);

  useEffect(() => {
    dispatch(setCharacterAction());
  }, [dispatch]); */

  /* const history = useHistory();
     const addPost = () => {
     history.push("/posts/add");
  }; */

  const [filteredCharacters, setMoreCharacter] = useState(
    character.slice(0, 10)
  );
  const onClickLoadMore = () => {
    setMoreCharacter([...character].slice(0, filteredCharacters.length + 10));
    console.log(filteredCharacters);
  };

  /*   const [nextCharacterPage, setNextCharacterPage] = useState(
    character.indexOf.next)
  ) */

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
              <CharactersCard
                character={
                  filteredCharacters
                } /* onClickCharacterCard={onClickCharacterCard} */
              />
              <div className="load-more-cards">
                {filteredCharacters.length !== character.length && (
                  <LoadMoreBtn
                    title={"Load More"}
                    onClickLoadMore={onClickLoadMore}
                  />
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
});

/*   const onClickCharacterCard = (id: number) => {
    console.log({ id });
    const characterFilm = character.find(({ id: characterId }) => id === characterId);

    if (characterFilm) {
      setSelectedFilm(characterFilm);
    }
  }; */
