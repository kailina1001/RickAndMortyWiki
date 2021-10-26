import { BaseService } from "./BaseService";

class EpisodeAPIService extends BaseService {
  public async getEpisode() {
    return this.get("episode/?limit=41");
  }
  public async getSelectedEpisode(id: any) {
    return this.get(`episode/${id}`);
  }
}
export const EpisodeService = new EpisodeAPIService();
