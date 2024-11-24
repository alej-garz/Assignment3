import { Component } from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {Pet} from '../pet';
import {PetDataService} from '../pet-data.service';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    NgOptimizedImage,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets: Observable<Pet[]>

  constructor(petDataService: PetDataService) {
    this.pets = petDataService.getAllPets()
  }
}
