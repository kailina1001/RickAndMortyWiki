import { BaseService } from "./BaseService";

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
  }
}
export const EpisodeService = new EpisodeAPIService();

// && - and , || - or
