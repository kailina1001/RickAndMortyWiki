export interface IСharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IEpisodeCharacter;
  location: ILocationCharacter;
  image: string;
  episode: IEpisode;
  url: string;
  created: string;
}
export interface IEpisodeCharacter {
  name: string;
  url: string;
}

export interface ILocationCharacter {
  name: string;
  url: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
