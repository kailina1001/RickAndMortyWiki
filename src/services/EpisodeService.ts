import axios from "axios";
import { Episodes } from "./../components/pages/Episodes";
import { BaseService } from "./BaseService";
import { useEffect, useRef, useState } from "react";
class EpisodeAPIService extends BaseService {
  public async getEpisode(currentEpisodePage: number) {
    return this.get(`/?page=${currentEpisodePage}`);
  }
  public async getSelectedEpisode(id: any) {
    return this.get(`/${id}`);
  }
  public async getEpisodeFilterAction(episodeParams: any) {
    return this.get(
      `/?name=${episodeParams.name ? episodeParams.name : ""}&episode=${
        episodeParams.episode ? episodeParams.episode : ""
      }`
    );
    /* this.get(
      `/?name=${episodeParams.name ? episodeParams.name : ""}&episode=${
        episodeParams.episode ? episodeParams.episode : ""
      }`
    ).then(
      (result) =>
        this.get(
          `/?name=${episodeParams.name ? episodeParams.name : ""}&episode=${
            episodeParams.episode ? episodeParams.episode : ""
          }`
        ),
      (error) => alert("not found")
    ); */
  }
}

export const EpisodeService = new EpisodeAPIService();

// && - and , || - or
