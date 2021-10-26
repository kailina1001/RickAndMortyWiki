export interface IСharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IEpisode;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface IEpisode {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}
