import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { GenderChoices, SeasonChoices, SizeChoices } from '../../enum/Clothing';

@Component({
  selector: 'app-clothing-donation',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './clothing-donation.component.html',
  styleUrl: './clothing-donation.component.scss'
})
export class ClothingDonationComponent {

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

  submitForm() {

  }

}
