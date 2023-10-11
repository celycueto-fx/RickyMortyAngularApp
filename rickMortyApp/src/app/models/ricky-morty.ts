export interface RickyMorty {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  options: string[];
  defaultValue: string;
}


export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string

}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface episode {
  id: string,
  name: number,
  air_date: string;
  episode: null;
  characters: [];
  url: string;
  created: string
}
