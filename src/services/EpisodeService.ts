import { BaseService } from "./BaseService";

class EpisodeAPIService extends BaseService {
  public async getEpisode(currentEpisodePage: number) {
    return this.get(`/?page=${currentEpisodePage}`);
  }
  public async getSelectedEpisode(id: any) {
    return this.get(`/${id}`);
  }
}
export const EpisodeService = new EpisodeAPIService();
