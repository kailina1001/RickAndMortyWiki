import * as React from "react";
import { memo } from "react";
import "./index.css";
import { GoBackBtn } from "../../atoms/GoBackBtn";
import { DescriptionText } from "../../atoms/DescriptionText";
import { DescriptionTitle } from "../../atoms/DescriptionTitle";
import { IEpisode } from "../../../types/episode";
import { SelectedEpisodeName } from "../../atoms/SelectedEpisodeName";
import { EpisodeInfo } from "../../atoms/EpisodeInfo";

export const SelectedEpisode = memo((episode: IEpisode) => {
  return (
    <div>
      <div className="selected-episode-header">
        <GoBackBtn />
        <div>
          <SelectedEpisodeName name={episode.name} />
          <div className="selected-episode-date">
            <div>
              <DescriptionTitle title="Episode" />
              <DescriptionText text={episode.episode} />
            </div>
            <div>
              <DescriptionTitle title="Date" />
              <DescriptionText text={episode.air_date} />
            </div>
          </div>
        </div>
      </div>
      <EpisodeInfo character={episode.characters} />
    </div>
  );
});
