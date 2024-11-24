import {Component, OnDestroy} from '@angular/core';
import {Pet} from '../pet';
import {Subscription} from 'rxjs';
import {PetDataService} from '../pet-data.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnDestroy {
  pet: Pet | undefined;

  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {
    const id: string | null = activatedRoute.snapshot.paramMap.get('id')

    if (id != null) {
      const numId: Number = parseInt(id)
      this.petSub = petDataService.getFlowerById(numId).subscribe(pet => this.pet = pet)
    }
  }

  ngOnDestroy() {
    this.petSub?.unsubscribe()
  }
}
