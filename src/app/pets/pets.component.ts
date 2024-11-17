import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  petName: string = "Charlie"
  petKind: String = "Dog"
  petAge: number = 3
  owner: string = "Patricia Johnson"
}
