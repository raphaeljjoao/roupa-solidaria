import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { GenderChoices, SeasonChoices, SizeChoices } from '../../enum/Clothing';
import { ClothingItem } from '../../models/ClothingItem';
import { ClothingItemService } from '../../service/clothing-item.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { Router } from '@angular/router';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

@Component({
  selector: 'app-clothing-donation',
  imports: [CommonModule, NavbarComponent, SharedPipesModule],
  templateUrl: './clothing-donation.component.html',
  styleUrl: './clothing-donation.component.scss'
})
export class ClothingDonationComponent {

  constructor(
    private clothingItemService: ClothingItemService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  genderOptions = this.getEnumValues(GenderChoices);
  sizeOptions = this.getEnumValues(SizeChoices);
  seasonOptions = this.getEnumValues(SeasonChoices);

  getEnumValues(enumType: any): any[] {
    return Object.values(enumType);
  }

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

  formIsValid(): boolean {
    const form = document.querySelector('form') as HTMLFormElement;
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.disabled = !form.checkValidity();
    return form.checkValidity();
  }

}
