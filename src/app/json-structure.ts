export interface JsonStructure {
  id: string;
  name: string;
  petKind: string;
  age: number;
  image: string;
  owner: string;
}

export interface PetsJsonStructure {
  pets: JsonStructure[];
}
