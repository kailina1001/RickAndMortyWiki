import { BaseService } from "./BaseService";

class CharacterAPIService extends BaseService {
  public async getCharacter() {
    return this.get("character/?limit=20");
  }
  public async getSelectedCharacter(id: any) {
    return this.get(`character/${id}`);
  }
}
export const CharacterService = new CharacterAPIService();
