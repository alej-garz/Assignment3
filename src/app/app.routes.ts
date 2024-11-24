import { Routes } from '@angular/router';
import {PetsComponent} from './pets/pets.component';
import {PetDetailsComponent} from './pet-details/pet-details.component';

export const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: '', redirectTo: 'pets', pathMatch: 'full'}
];
