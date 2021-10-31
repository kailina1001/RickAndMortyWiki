import React, { useEffect } from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSerialState } from "../../core/selectors/serialSelector";
import { SelectedEpisode } from "../molecules/SelectedEpisode";
import { getSelectedEpisodesAction } from "../../core";

export const SelectedEpisodePage = memo(() => {
  const params = useParams() as any;
  const { selectedEpisode } = useSelector(getSerialState) as any;
  console.log(selectedEpisode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedEpisodesAction(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <MainTemplate
        mainBlock={
          <div className="container selected-episode-wrapper">
            {selectedEpisode && (
              <SelectedEpisode key={selectedEpisode.id} {...selectedEpisode} />
            )}
          </div>
        }
      />
    </div>
  );
});
