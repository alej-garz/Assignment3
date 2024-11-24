export interface JsonStructure {
  id: number;
  name: string;
  description: string;
  age: number;
  imgSrc: string;
  owner: string;
}

export interface PetsJsonStructure {
  pets: JsonStructure[];
}
