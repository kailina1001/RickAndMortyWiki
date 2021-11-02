import { BaseService } from "./BaseService";

class CharacterAPIService extends BaseService {
  public async getCharacter(currentCharacterPage: number) {
    return this.get(`/?page=${currentCharacterPage}`);
  }
  public async getSelectedCharacter(id: any) {
    return this.get(`/${id}`);
  }

  public async getCharacterFilterAction(characterParams: any) {
    return this.get(
      `/?name=${characterParams.name ? characterParams.name : ""}&status=${
        characterParams.status ? characterParams.status : ""
      }&gender=${
        characterParams.gender ? characterParams.gender : ""
      }&species=${characterParams.species ? characterParams.species : ""}`
    );
  }
}
export const CharacterService = new CharacterAPIService();
