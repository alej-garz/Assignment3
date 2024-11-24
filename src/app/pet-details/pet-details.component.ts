import {Component, OnDestroy} from '@angular/core';
import {Pet} from '../pet';
import {Subscription} from 'rxjs';
import {PetDataService} from '../pet-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnDestroy {
  pet: Pet | undefined;

  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {
    const id: string | null = activatedRoute.snapshot.paramMap.get('id')

    if (id != null) {
      this.petSub = petDataService.getFlowerById(id).subscribe(pet => this.pet = pet)
    }
  }

  ngOnDestroy() {
    this.petSub?.unsubscribe()
  }
}
