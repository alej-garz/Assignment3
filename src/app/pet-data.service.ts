import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonStructure, PetsJsonStructure} from './json-structure';
import {Pet} from './pet';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) { }

  private static imgFolder: string = '../images/pets/'
  private static jsonFile: string = '../data/pets.json';

  private static jsonToPet(petJson: JsonStructure): Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id
    pet.name = petJson.name
    pet.petKind = petJson.petKind
    pet.age = petJson.age
    pet.imgSrc = PetDataService.imgFolder + petJson.image
    pet.owner = petJson.owner

    console.log(pet)
    return pet;
  }

  public getAllPets(): Observable<Pet[]> {
    return this.http.get<PetsJsonStructure>(PetDataService.jsonFile)
      .pipe(
        map(petCatalog => petCatalog.pets
          .map(pet => PetDataService.jsonToPet(pet))
        )
      )
  }

  public getFlowerById(id: Number): Observable<Pet | undefined> {
    return this.getAllPets().pipe(
      map(pets => pets.find(pet => pet.id === id))
    )
  }
}
