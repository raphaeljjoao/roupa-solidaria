import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { GenderChoices, SeasonChoices, SizeChoices } from '../../enum/Clothing';
import { ClothingItem } from '../../models/ClothingItem';
import { ClothingItemService } from '../../service/clothing-item.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothing-donation',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './clothing-donation.component.html',
  styleUrl: './clothing-donation.component.scss'
})
export class ClothingDonationComponent {

  constructor(
    private clothingItemService: ClothingItemService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  genderOptions = [
    { value: GenderChoices.Male, label: 'Masculino' },
    { value: GenderChoices.Female, label: 'Feminino' },
    { value: GenderChoices.Unisex, label: 'Unissex' },
  ];

  sizeOptions = [
    { value: SizeChoices.Small, label: 'P' },
    { value: SizeChoices.Medium, label: 'M' },
    { value: SizeChoices.Large, label: 'G' },
    { value: SizeChoices.ExtraLarge, label: 'GG' },
  ];

  seasonOptions = [
    { value: SeasonChoices.Spring, label: 'Primavera' },
    { value: SeasonChoices.Summer, label: 'Verão' },
    { value: SeasonChoices.Fall, label: 'Outono' },
    { value: SeasonChoices.Winter, label: 'Inverno' },
  ];

  submitForm(event: Event) {
    event.preventDefault();

    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    const clothingItem: Partial<ClothingItem> = {
      description: formData.get('description') as string,
      color: formData.get('color') as string,
      gender: formData.get('gender') as GenderChoices,
      size: formData.get('size') as SizeChoices,
      season: formData.get('season') as SeasonChoices,
      donor_id: this.localStorageService.getLoggedUserId() as number,
    };

    this.clothingItemService.createClothingItem(clothingItem as ClothingItem).subscribe((clothing) => {
      this.router.navigate(['/clothing', clothing.id]);
    });

  }

}
