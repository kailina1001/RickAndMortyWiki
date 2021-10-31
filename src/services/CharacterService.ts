import { BaseService } from "./BaseService";

class CharacterAPIService extends BaseService {
  public async getCharacter(currentCharacterPage: number) {
    return this.get(`/?page=${currentCharacterPage}`);
  }
  public async getSelectedCharacter(id: any) {
    return this.get(`/${id}`);
  }
}
export const CharacterService = new CharacterAPIService();
