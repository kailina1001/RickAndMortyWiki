export interface IMainСharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IMainEpisodeCharacter;
  location: IMainLocationCharacter;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface IMainEpisodeCharacter {
  name: string;
  url: string;
}

export interface IMainLocationCharacter {
  name: string;
  url: string;
}
