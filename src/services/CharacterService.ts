import { BaseService } from "./BaseService";

class CharacterAPIService extends BaseService {
  public async getCharacter(currentCharacterPage: number) {
    return this.get(`/?page=${currentCharacterPage}`);
  }
  public async getSelectedCharacter(id: any) {
    return this.get(`/${id}`);
  }

  public async getCharacterSpeciesFilterAction(characterSpecie: string) {
    return this.get(`/?species=${characterSpecie}`);
  }
  public async getCharacterGenderFilterAction(characterGender: string) {
    return this.get(`/?gender=${characterGender}`);
  }
  public async getCharacterStatusFilterAction(characterStatus: string) {
    return this.get(`/?status=${characterStatus}`);
  }
}
export const CharacterService = new CharacterAPIService();
