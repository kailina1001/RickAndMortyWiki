import React, { useEffect, useState } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getSerialState } from "../../core/selectors/serialSelector";
import { useParams } from "react-router";
import { getSelectedCharacterAction } from "../../core/actions/serialAction";
import { SelectedCharacter } from "../molecules/SelectedCharacter";

export const SelectedCharacterPage = memo(() => {
  const params = useParams() as any;
  const { selectedCharacter } = useSelector(getSerialState) as any;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedCharacterAction(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="selected-character-page-wrapper">
            {selectedCharacter && (
              <SelectedCharacter
                key={selectedCharacter.id}
                {...selectedCharacter}
              />
            )}
          </div>
        }
      />
    </div>
  );
});
